import React, { useEffect, useState } from "react";
import "./Checkout.scss";
import Header from "../Header/Header";
import { Typography, Select, Button } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import Footer from "../Footer/Footer";
import { auth, firestore } from "../../Firebase/FIrebase";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [uid, setuid] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUserData, setCurrentUserData] = useState("");

  const navigate = useNavigate();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuid(user.displayName);
        setEmail(user.email);
        setName(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);
  

  function grandtotal() {
    let x = 0;
    cart.map((i) => {
      return (x += i.price * i.quantity);
    });
    return x;
  }

  const getDocuments = async () => {
    const getData = collection(firestore, "cart " + uid);
    const name = await getDocs(getData);
    setCart(name.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  getDocuments();

  async function getCurrentUserData() {
    const docRef = doc(firestore, "user", name);
    const docsnap = await getDoc(docRef);
    if (docsnap.exists()) {
      setCurrentUserData(docsnap.data());
    } else {
      console.log("error");
    }
  }
  getCurrentUserData();

  async function handleOrder() {
    addDoc(collection(firestore, "order"), {
      userId: name,
      name: currentUserData.name,
      number: currentUserData.phone,
      email: currentUserData.email,
      address: currentUserData.address,
      total: grandtotal(),
      date: currentDate,
    })
      .then(() => console.log("success"))
      .catch((error) => console.log(error));

    toast.success("order successfully");
    // collection(firestore, "cart " + uid).get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // doc.ref.delete();
    //       console.log(doc);
    //     });
    //   })
    //   .catch(() => console.log("error"));
    // deleteDoc(doc(firestore, "cart " + uid))
    //   .then(() => console.log("success"))
    //   .catch(() => console.log("error"));
  }

  return (
    <div className="checkout">
      <div>
        <Header user={uid} />
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
            <div className="grandtotal">
              <Typography.Paragraph className="titems">
                grand total :{" "}
              </Typography.Paragraph>
              <Typography.Paragraph className="tprice">
                Rs. {grandtotal()}
              </Typography.Paragraph>
            </div>
            <Link className="vcart" to="/cart">
              View Cart
            </Link>
          </div>
          <div className="info">
            <Typography.Title className="infotitle">Your info</Typography.Title>
            <div className="display">
              <UserOutlined className="UserOutlined" />
              <Typography.Paragraph className="infoname">
                {uid}
              </Typography.Paragraph>
            </div>
            <div className="phone">
              <PhoneFilled className="PhoneFilled" />
              <Typography.Paragraph className="infophone">
                {currentUserData.phone}
              </Typography.Paragraph>
            </div>
            <div className="mail">
              <MailFilled className="MailFilled" />
              <Typography.Paragraph className="infomail">
                {email}
              </Typography.Paragraph>
            </div>
          </div>
          <div className="address">
            <Typography.Title className="daddress">
              Delivery Address
            </Typography.Title>
            <div className="map">
              <EnvironmentFilled className="EnvironmentFilled" />
              <Typography.Paragraph className="paddress">
                {currentUserData.address}
              </Typography.Paragraph>
            </div>
            <div className="updateaddress">
              <Link className="uaddress" to="/update_address">
                Enter your Address
              </Link>
            </div>
          </div>
          <div className="inputField">
            <Select
              placeholder="-- Select payment method --"
              className="select"
              options={[
                {
                  value: "Cash on delivery",
                  label: "Cash on delivery",
                },
              ]}
              aria-required
            />
          </div>
          <div className="Button">
            <Button className="placeorder" onClick={handleOrder}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
