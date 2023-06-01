import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FIrebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // dispatch(loginInitaiate(email, password));
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => console.log(user))
    .catch((error) => console.log(error.message));
    setEmail("");
    setPassword("");
    toast.success("Login successfully");
    navigate("/");
  }

  return (
    <div className="login">
      <div>
        <Header />
      </div>
      <ToastContainer />
      <div className="form">
        <Form className="form1">
          <Typography.Title className="formtitle">LOGIN NOW</Typography.Title>
          <div className="inputfield">
            <Input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          </div>
          <br />
          <div className="loginbutton">
            <Button type="primary" htmlType="submit" className="loginbtn" onClick={handleLogin}>
              Login Now
            </Button >
          </div>
          <Typography.Paragraph className="lparagraph">
            don't have an account?{" "}
            <Link className="llink" to="/register">
              register now
            </Link>
          </Typography.Paragraph>
        </Form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
