import React, { useState } from "react";
import "./Cart.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Card, Image, Input, Button } from "antd";
import { EyeFilled, ShoppingCartOutlined, EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import pizza from "../Image/pizza-1.png";

const { Meta } = Card;

const Cart = () => {
  const [preview, setPreview] = useState(false);

  return (
    <div className="cart">
      <div>
        <Header />
      </div>
      <div className="container1">
        <Typography.Title className="atitle">Shopping Cart</Typography.Title>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/cart" className="labout">
          / cart
        </Link>
      </div>
      <div className="dishes">
        <Typography.Title className="dtitle">YOUR CART</Typography.Title>
        <div className="container">
          <Card className="dcard">
            <Image src={pizza} className="dimage" preview={preview}></Image>
            <Meta className="meta" description="pizza" />
            <Typography.Title className="price">Rs. 100</Typography.Title>
            <Input className="input" type="number" defaultValue={1} min={1} />
            <EditFilled className="EditFilled" /> 
            <EyeFilled className="eyefilled" />
            <ShoppingCartOutlined className="ShoppingCartOutlined" />
            <Typography.Paragraph className="paragraph">sub total : Rs. 100/-</Typography.Paragraph>
          </Card>
        </div>
      </div>
      <div className="total">
        <Typography.Paragraph className="price">cart total : Rs. 400</Typography.Paragraph>
        <Link className="checkout" to="/checkout">Proceed To Checkout</Link>
      </div>
      <div className="btn1">
        <Button className="delete">Delete All</Button>
        <br />
        <Link className="link" to="/menu">Continue Shopping</Link>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;