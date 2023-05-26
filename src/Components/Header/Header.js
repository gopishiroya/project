import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Popover, Typography } from "antd";
import { auth, firestore } from "../../Firebase/FIrebase";
import { ToastContainer, toast } from "react-toastify";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
const Header = (props) => {
  
  // const [user,setUser]=useState(null)
  function handleLogout() {
    auth
      .signOut()
      .then(() => console.log("success"))
      .catch((error) => console.log(error));
      toast.success("Logout");
     
  }
  
  const text = (
    <Typography.Title className="usertext">
      Please Login First! 👇
    </Typography.Title>
  );
  const content = (
    <div className="loginbtnpopup">
      <Link to="/login" className="loginbtninner">
        Login Now
      </Link>
    </div>
  );

  // useEffect(() => {
  //   getDocuments();
  // }, [])


  // const getData = collection(firestore, "user");
  // const getDocuments = async () => {
  //   const result = await getDocs(getData);
  //   setUser(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // console.log(user);

  
  const text1 = (
    <Typography.Title className="usertext">{props.user}</Typography.Title>
  );
  const content1 = (
    <div className="loginbtnpopup">
      <Button className="loginbtninner" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
  return (
    <>
    <ToastContainer />
      <div className="header">
        <Link className="title" to="/">
          yum-yum 😋
        </Link>
        <Link className="pages" to="/">
          Home
        </Link>
        <Link className="pages" to="/about">
          About
        </Link>
        <Link className="pages" to="/menu">
          Menu
        </Link>
        <Link className="pages">Orders</Link>
        <Link className="pages" to="/contect">
          Contact
        </Link>

        <div className="icon">
        {props.user && (
            <Popover
              placement="bottomRight"
              className="icon1"
              title={text1}
              content={content1}
              trigger="hover"
            >
              <UserOutlined className="icon1" />
            </Popover>
          )}
          {!props.user && (
            <Popover
              placement="bottomRight"
              className="icon1"
              title={text}
              content={content}
              trigger="hover"
            >
              <UserOutlined className="icon1" />
            </Popover>
          )}
          
          <div className="cart">
            <Link to="/cart"> 
            <Badge count={props.count} size="large" className="notification">
              <ShoppingCartOutlined className="icon2" />
            </Badge></Link>
          </div>
          <SearchOutlined className="icon3" />
        </div>
      </div>
    </>
  );
};

export default Header;
