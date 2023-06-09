import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/FIrebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);

  function handleRegister() {
    if (password !== cpassword) {
      return toast.error("please enter correct password");
    }
    if (password >= 6) {
      return toast.error("password atlist 6 character");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(user.user, { displayName: name, phoneNumber: number });
        const ref = doc(firestore, "user", user.user.uid);
        const docRef = setDoc(ref, {
          name: name,
          email: email,
          password: password,
          phone: number
        })
          .then(() => console.log(docRef))
          .catch(() => console.log("error"));
      })
      .catch((error) => console.log(error.message));
    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setCpassword("");
    navigate("/");
  }

  return (
    <>
      <div className="register">
        <div>
          <Header />
        </div>
        <div className="form">
          <Form className="form1">
            <Typography.Title className="formtitle">
              REGISTER NOW
            </Typography.Title>
            <div className="inputfield">
              <Input
                className="input"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                className="input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                className="input"
                type="text"
                placeholder="Enter your number"
                maxLength={10}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <Input.Password
                className="input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input.Password
                className="input"
                type="password"
                placeholder="Confirm your password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                required
              />
            </div>
            <div className="registerbutton">
              <Button
                type="primary"
                htmlType="submit"
                className="registerbtn"
                onClick={handleRegister}
              >
                Register Now
              </Button>
            </div>
            <Typography.Paragraph className="lparagraph">
              already have an account?{" "}
              <Link className="llink" to="/login">
                login now
              </Link>
            </Typography.Paragraph>
          </Form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
};

export default Register;
