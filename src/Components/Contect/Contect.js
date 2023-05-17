import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Image, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./Contect.scss";
import contect from "../Image/contact-img.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contectPutDataInitaiate } from "../../Action/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { TextArea } = Input;
const Contect = () => {
  const [preview, setPreview] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(contectPutDataInitaiate(name, number, email, message));
    toast.success("data added successfully");
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contect">
      <ToastContainer />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                className="input"
                type="text"
                placeholder="Enter your number"
                maxLength={10}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <Input
                className="input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <Input className="input" type="text" placeholder="Enter your message" /> */}
              <TextArea
                className="input"
                required
                placeholder="Enter your message"
                maxLength={500}
                cols={30}
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <br />
            <div className="button1">
              <Button
                type="primary"
                htmlType="submit"
                className="contectbtn"
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contect;
