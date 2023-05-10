import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Image, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./Contect.scss";
import contect from "../Image/contact-img.svg";
import { useState } from "react";

const { TextArea } = Input;
const Contect = () => {
  const [preview, setPreview] = useState(false);

  return (
    <div className="contect">
      <Header />
      <div className="phone">
        <Typography.Title className="ctitle">Contect Us</Typography.Title>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/contect" className="ccontect">
          / contect
        </Link>
      </div>
      <div className="row">
        <Image src={contect} preview={preview} className="image" />
        <div className="form">
          <Form className="form1">
            <Typography.Title className="formtitle">
              Tell Us Something!
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
              {/* <Input className="input" type="text" placeholder="Enter your message" /> */}
              <TextArea
                className="input"
                required
                placeholder="Enter your message"
                maxLength={500}
                cols={30}
                rows={10}
              />
            </div>
            <br />
            <Button type="primary" htmlType="submit" className="contectbtn">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contect;
