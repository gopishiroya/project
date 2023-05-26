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
import { collection, getDocs, setDoc } from "firebase/firestore";

const Checkout = (props) => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate(null);
  // console.log(props.total);
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
  console.log(uid);

  useEffect(() => {
    getUserData();
  }, [])

  const getUser = collection(firestore, "user");
  const getUserData = async () => {
    const result = await getDocs(getUser);
    setUser(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

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
                Rs. {props.total}
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
                {user.name}
              </Typography.Paragraph>
            </div>
            <div className="phone">
              <PhoneFilled className="PhoneFilled" />
              <Typography.Paragraph className="infophone">
                9638527410
              </Typography.Paragraph>
            </div>
            <div className="mail">
              <MailFilled className="MailFilled" />
              <Typography.Paragraph className="infomail">
                {uid}
              </Typography.Paragraph>
            </div>
            <div className="update">
              <Link className="updateinfo" to="/update_profile">
                Update Info
              </Link>
            </div>
          </div>
          <div className="address">
            <Typography.Title className="daddress">
              Delivery Address
            </Typography.Title>
            <div className="map">
              <EnvironmentFilled className="EnvironmentFilled" />
              <Typography.Paragraph className="paddress">
                please enter your address
              </Typography.Paragraph>
            </div>
            <div className="updateaddress">
              <Link className="uaddress" to="/update_address">
                Update Address
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
                {
                  value: "Online payment",
                  label: "Online payment",
                },
              ]}
              aria-required
            />
          </div>
          <div className="Button">
            <Button className="placeorder">Place Order</Button>
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
