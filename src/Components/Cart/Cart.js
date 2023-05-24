<<<<<<< HEAD
import React, { useState ,useEffect} from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> da399629c48becce5a01a476b197623364e26f77
import "./Cart.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Card, Image, Input, Button } from "antd";
<<<<<<< HEAD
import { EyeFilled, ShoppingCartOutlined, EditFilled ,DeleteTwoTone} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import pizza from "../Image/pizza-1.png";
import { auth } from "../../Firebase/FIrebase";
=======
import {
  EyeFilled,
  ShoppingCartOutlined,
  EditFilled,
  DeleteTwoTone,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import pizza from "../Image/pizza-1.png";
import { collection, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/FIrebase";
>>>>>>> da399629c48becce5a01a476b197623364e26f77

const { Meta } = Card;

const Cart = () => {
  const [preview, setPreview] = useState(false);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate(null);

  function Getuserid() {
    const [uid, setuid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setuid(user.uid);
        } else {
          navigate("/");
        }
      });
    }, []);
    return uid;
  }
  const uid = Getuserid();
  console.log(uid);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // collection(firestore,"cart" + user.id).onSnapshot(snapshot => {
        //   const newCartProducts = snapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     ...doc.data()
        //   }))
        //   setCart(newCartProducts);
        // })

        getDocuments();
      }
    });
  }, []);

  const getData = collection(firestore, "cart" + uid);
  const getDocuments = async () => {
    const result = await getDocs(getData);
    setCart(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(cart);

  const navigate = useNavigate();

  function Getuserid() {
    const [uid, setuid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setuid(user.uid);
        } else {
          navigate("/");
        }
      });
    }, []);
    return uid;
  }
  const uid = Getuserid();
  console.log(uid);

  return (
    <div className="cart">
      <div>
        <Header user={uid} />
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
            <DeleteTwoTone className="ShoppingCartOutlined" />

            <Typography.Paragraph className="paragraph">
              sub total : Rs. 100/-
            </Typography.Paragraph>
          </Card>
        </div>
      </div>
      <div className="total">
        <Typography.Paragraph className="price">
          cart total : Rs. 400
        </Typography.Paragraph>
        <Link className="checkout" to="/checkout">
          Proceed To Checkout
        </Link>
      </div>
      <div className="btn1">
        <Button className="delete">Delete All</Button>
        <br />
        <Link className="link" to="/menu">
          Continue Shopping
        </Link>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
