import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../Firebase/FIrebase";
import { addDoc, collection } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid,setuid]=useState(null)
  const navigate = useNavigate();

  function handleLogin(e) {
    // if(email==='admin' && password===password){
    //   addDoc(collection(firestore, "admin"), {
    //     email: email,
    //     password: password,
    //   })
    //     .then(() => console.log("success"))
    //     .catch((error) => console.log(error));
    //   navigate("/deshboard")
    // }
    // else{
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => console.log(user))
    .catch((error) => console.log(error.message));
    setEmail("");
    setPassword("");
    navigate("/");
    // }
    
  }

  return (
    <div className="login">
      <div>
        <Header user={uid}/>
        <ToastContainer />
      </div>
     
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
