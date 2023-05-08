import React from "react";
import { Link } from "react-router-dom";
// import "./Header.scss";
import {  UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link className="title" to='/deshboard'>Admin Panel</Link>
        <Link className="pages" to="/home">Home</Link>
        <Link className="pages" to="/about">Products</Link>
        <Link className="pages" to="/menu">Orders</Link>
        <Link className="pages">Admins</Link>
        <Link className="pages">Users</Link>
        <Link className="pages">Messages</Link>
        <UserOutlined className="icon1" />
       
      </div>
    </>
  );
};

export default Header;
