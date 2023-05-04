import React, { useState } from "react";
import Header from "../Header/Header";
import { Image, Typography, Card } from "antd";
import "./About.scss";
import { Link } from "react-router-dom";
import about from "../Image/about-img.svg";
import step1 from '../Image/step-1.png';
import step2 from '../Image/step-2.png';
import step3 from '../Image/step-3.png';

const { Meta } = Card;

const About = () => {
  const [preview, setPreview] = useState(false);

  return (
    <div className="about">
      <Header />
      <div className="container">
        <Typography.Title className="atitle">About Us</Typography.Title>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/about" className="labout">
          {" "}
          / about
        </Link>
      </div>
      <div className="row">
        <Image src={about} className="image" preview={preview} />
        <div className="content">
          <Typography.Title className="ctitle">why choose us?</Typography.Title>
          <Typography.Paragraph className="cparagraph">
            Online ordering allows customers to order anytime, anywhere using
            their mobiles, tablets or other handheld devices. There is no need
            for the customer to reach out and make a call meanwhile disturbing
            their privacy or disrupting a meeting for a lunch order.
          </Typography.Paragraph>
          <button className="button">Our Menu</button>
        </div>
      </div>
      <div className="step">
        <Typography.Title className="stitle">SIMPLE STEPS</Typography.Title>
        <div className="card">
          <Card className="step1">
            <Image src={step1} className="image" preview={preview}></Image>
            <Meta className="meta" title="Choose Order" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolorem." />
          </Card>
          <Card className="step1">
            <Image src={step1} className="image" preview={preview}></Image>
            <Meta className="meta" title="Choose Order" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolorem." />
          </Card>
          <Card className="step1">
            <Image src={step1} className="image" preview={preview}></Image>
            <Meta className="meta" title="Choose Order" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolorem." />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
