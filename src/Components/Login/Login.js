import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginInitaiate } from "../../Action/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth=getAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid,setuid]=useState(null)

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user)
  const navigate = useNavigate();
  
  useEffect(() => {
    if(currentUser) {
      navigate("/");
    }
  }, [currentUser])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuid(user.displayName);
      } 
    });
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    dispatch(loginInitaiate(email, password));
    setEmail("");
    setPassword("");
    toast.success("Login successfully");
  } 
  function handlegoogle(){
    signInWithPopup(auth,provider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
    navigate("/")
  }

  return (
    <div className="login">
      <div>
        <Header user={uid}/>
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
            </Button>
            <div className="google" onClick={handlegoogle}>
            <GoogleOutlined  className="logingoogle" />
            <Typography.Paragraph className="par">Google</Typography.Paragraph>
            </div>
            
            {/* <Button  onClick={handlegoogle}>
              sign in with google
            </Button> */}
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
