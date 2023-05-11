import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div>
        <Header />
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
            <Button type="primary" htmlType="submit" className="loginbtn">
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
