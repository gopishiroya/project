import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginInitaiate, PutDataInitaiate } from "../../Action/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user)
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate])

  async function handleLogin(e) {
    e.preventDefault();
    dispatch(loginInitaiate(email, password));
    setEmail("");
    setPassword("");
    dispatch(PutDataInitaiate(email, password));
    toast.success("Login successfully");
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
            </Button>
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
