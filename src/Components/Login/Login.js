import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div>
        <Header />
      </div>
      <div className="form">
        <Form className="form1">
          <Typography.Title className="formtitle">
            LOGIN NOW
          </Typography.Title>
          <div className="inputfield">
            <Input
              className="input"
              type="text"
              placeholder="Enter your name"
            />
            <Input
              className="input"
              type="text"
              placeholder="Enter your number"
            />
            <Input
              className="input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <br />
          <Button type="primary" htmlType="submit" className="btn">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
