import React, { useState, useEffect } from "react";
import "./Cart.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Card, Image, Input, Button } from "antd";
import { EditFilled, DeleteTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import pizza from "../Image/pizza-1.png";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/FIrebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Meta } = Card;
const Cart = () => {
  const [preview, setPreview] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState([]);
  const navigate = useNavigate(null);
  function Getuserid() {
    const [uid, setuid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setuid(user.email);
        } else {
          navigate("/");
        }
      });
    }, []);
    return uid;
  }
  const uid = Getuserid();
  // console.log(uid);
  useEffect(() => {}, []);
  const getDocuments = async () => {
    const getData = collection(firestore, "cart " + uid);
    const name = await getDocs(getData);
    setCart(name.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(cart)
  getDocuments();
  async function handleDelete(cart) {
    await deleteDoc(doc(firestore, "cart " + uid, cart.id));
    toast.success("products delete successfully");
  }
  function handleEdit(cart) {
    const Total = cart.price * quantity;
    setTotal(Total);
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
                <Image src={pizza} className="dimage" preview={preview}></Image>
                <Meta className="meta" description={cart.name} />
                <Typography.Title className="price">
                  Rs. {cart.price}
                </Typography.Title>
                <Input
                  className="input"
                  name="quantity"
                  type="number"
                  min={1}
                  defaultValue={1}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <EditFilled
                  className="EditFilled"
                  onClick={() => handleEdit(cart, id)}
                />
                <DeleteTwoTone
                  className="ShoppingCartOutlined"
                  onClick={() => handleDelete(cart)}
                />
                <Typography.Paragraph className="paragraph">
                 sub total : {total}
                </Typography.Paragraph>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="total">
        <Typography.Paragraph className="price">
          cart total :
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