import React, { useState, useEffect } from "react";
import "./Cart.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Card, Image, Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import pizza from "../Image/pizza-1.png";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/FIrebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Meta } = Card;
const Cart = () => {
  const [preview, setPreview] = useState(false);
  const [cart, setCart] = useState([]);
  const [uid, setuid] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // need to explain how to use it "onAuthStateChanged"
      console.log('users ===data', user)
      if (user) {
        setuid(user.displayName);
      } else {
        navigate("/");
      }
    });
  }, []);
  const getDocuments = async () => {
    const getData = collection(firestore, "cart " + uid);
    const name = await getDocs(getData);
    setCart(name.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  getDocuments();

  async function handleDelete(cart) {
    await deleteDoc(doc(firestore, "cart " + uid, cart.id));
    toast.success("products delete successfully");
  }
  function grandtotal() {
    let x = 0;
    cart.map((i) => {
      return (x += i.price * i.quantity);
    });
    return x;
  }
  return (
    <div className="cart">
      <ToastContainer />
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
          {cart.map((cart, id) => {
            return (
              <Card className="dcard" key={id}>
                <Image src={cart.imageURL} className="dimage" preview={preview}></Image>
                <Meta className="meta" description={cart.name} />
                <div className="row">
                  <Typography.Title className="price">
                    Rs. {cart.price}
                  </Typography.Title>
                  <Typography.Title className="quantity">
                    Quantity: {cart.quantity}
                  </Typography.Title>
                </div>
                <DeleteTwoTone
                  className="ShoppingCartOutlined"
                  onClick={() => handleDelete(cart)}
                />
                <Typography.Paragraph className="paragraph" id="subtotal">
                  sub total : {cart.price * cart.quantity}
                </Typography.Paragraph>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="total">
        <Typography.Paragraph className="price">
          cart total : {grandtotal()}
        </Typography.Paragraph>
        <Link className="checkout" to="/checkout">
          Proceed To Checkout
        </Link>
      </div>
      <div className="btn1">
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







