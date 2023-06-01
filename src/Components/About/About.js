import React, { useState,useEffect } from "react";
import Header from "../Header/Header";
import { Image, Typography, Card,Rate } from "antd";
import "./About.scss";
import { Link } from "react-router-dom";
import about from "../Image/about-img.svg";
import step1 from "../Image/step-1.png";
import step2 from "../Image/step-2.png";
import step3 from "../Image/step-3.png";
import ekta from "../Image/ekta.png";
import gopi from "../Image/gopi.png";
import geera from "../Image/geera.png";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/FIrebase";

const { Meta } = Card;

const About = () => {
  const [preview, setPreview] = useState(false);
  const [uid, setuid] = useState(null)
  const navigate = useNavigate(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuid(user.displayName);
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="about">
      <Header  user={uid}/>
      <div className="container1">
        <Typography.Title className="atitle">About Us</Typography.Title>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/about" className="labout">
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
          <div className="Alink">
            <Link className="aboutLink" to="/menu">Our menu</Link>
          </div>
        </div>
      </div>
      <div className="step">
        <Typography.Title className="stitle">SIMPLE STEPS</Typography.Title>
        <div className="card">
          <Card className="step1">
            <Image src={step1} className="image" preview={preview}></Image>
            <Meta
              className="meta"
              title="Choose Order"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolorem."
            />
          </Card>
          <Card className="step1">
            <Image src={step2} className="image" preview={preview}></Image>
            <Meta
              className="meta"
              title="Fast Delivery"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolorem."
            />
          </Card>
          <Card className="step1">
            <Image src={step3} className="image" preview={preview}></Image>
            <Meta
              className="meta"
              title="Enjoy Food"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolorem."
            />
          </Card>
        </div>
      </div>
      <div className="review">
        <Typography.Title className="rtitle">
          CUSTOMER'S REIVEWS
        </Typography.Title>
        <div className="card1">
          <Card className="review">
            <Image src={ekta} className="rimage" preview={preview}></Image>
            <Typography.Paragraph className="rparagraph">
              "I recently switched my online meal ordering platform from a big
              company that was taking 13% of every order to your free online
              ordering platform."
            </Typography.Paragraph>
            <Rate className="rate" allowHalf defaultValue={5} />
            <Typography.Title className="rtitle">
              Ekta Rupareliya
            </Typography.Title>
          </Card>
          <Card className="review">
            <Image src={gopi} className="rimage" preview={preview}></Image>
            <Typography.Paragraph className="rparagraph">
              "It is fast and easy to edit the menu and that makes it easier for
              customers to order from our website. This had also a good impact
              on sales!"
            </Typography.Paragraph>
            <Rate className="rate" allowHalf defaultValue={5} />
            <Typography.Title className="rtitle">Gopi Shiroya</Typography.Title>
          </Card>
          <Card className="review">
            <Image src={geera} className="rimage" preview={preview}></Image>
            <Typography.Paragraph className="rparagraph">
              "We are very happy to have selected yum-yum Food." I am VERY
              PLEASED with your service. "It’s easy to use. And free, not like
              other platforms."
            </Typography.Paragraph>
            <Rate className="rate" allowHalf defaultValue={5} />
            <Typography.Title className="rtitle">
              Geera Godhani
            </Typography.Title>
          </Card>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
