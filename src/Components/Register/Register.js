import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input, Button } from "antd";
import { Link } from "react-router-dom";
import './Register.scss'

const Register = () => {
  return (
    <div className="register">
      <div>
        <Header />
      </div>
      <div className="form">
        <Form className="form1">
          <Typography.Title className="formtitle">REGISTER NOW</Typography.Title>
          <div className="inputfield">
            <Input
              className="input"
              type="text"
              placeholder="Enter your name"
            />
            <Input
              className="input"
              type="text"
              placeholder="Enter your email"
            />
            <Input
              className="input"
              type="text"
              placeholder="Enter your number"
              maxLength={10}
            />
            <Input.Password
              className="input"
              type="text"
              placeholder="Enter your password"
            />
            <Input
              className="input"
              type="text"
              dependencies={['password']}
              placeholder="Confirm your password"
            />
          </div>
          <br />
          <Button type="primary" htmlType="submit" className="btn">
            Register Now 
          </Button>
          <Typography.Paragraph className="lparagraph">
            already have an account? {" "}
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
  );
};

export default Register;
