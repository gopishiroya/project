import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
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
              type="text"
              placeholder="Enter your email"
            />
            <Input.Password
              className="input"
              type="text"
              placeholder="Enter your password"
            />
          </div>
          <br />
          <Button type="primary" htmlType="submit" className="btn">
            Login Now
          </Button>
          <Typography.Paragraph className="lparagraph">
            don't have an account? <Link className="llink" to="/register">register now</Link>
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
