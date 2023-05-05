import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { Card, Image, Input } from "antd";
import { EyeFilled, ShoppingCartOutlined } from "@ant-design/icons"
import pizza from '../Image/pizza-1.png';
import { useState } from 'react';

const { Meta } = Card;

const Menu = () => {

  const [preview, setPreview] = useState(false);

  return (
    <div className="menu">
      <Header />
        <div className="menutitle">
          <Typography.Title className="mtitle">Our Menu</Typography.Title>
          <Link to="/" className="home">
            Home 
          </Link>
          <Link to="/menu" className="mmenu">
             / menu
          </Link>
        </div>
        <div className="dishes">
          <Typography.Title className="dtitle">LATEST DISHES</Typography.Title>
          <div className="container">
            <Card className="dcard">
              <Image src={pizza} className="dimage" preview={preview}></Image>
              <Meta className="meta" title="fast food" description="pizza" />
              <Typography.Title className="price">Rs. 100</Typography.Title>
              <Input className="input" type="number" defaultValue={1} min={1} />
              <EyeFilled className="eyefilled" />
              <ShoppingCartOutlined className="ShoppingCartOutlined" />
            </Card>
          </div>
        </div>
      <Footer />
    </div>
  );
};
export default Menu;
