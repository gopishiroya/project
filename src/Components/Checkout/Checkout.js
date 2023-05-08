import React from "react";
import "./Checkout.scss";
import Header from "../Header/Header";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout">
      <div>
        <Header />
      </div>
      <div className="container1">
        <Typography.Title className="atitle">Checkout</Typography.Title>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/checkout" className="labout">
          / checkout
        </Link>
      </div>
      <div className="row">
        <div className="column">
          <Typography.Title className="title">ORDER SUMMARY</Typography.Title>
        </div>
        <div className="box">
          <div className="order">
            <Typography.Title className="item">Cart Items</Typography.Title>
            <div className="name">
              <Typography.Paragraph className="items">pizza</Typography.Paragraph>
              <Typography.Paragraph className="price">Rs. 100</Typography.Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
