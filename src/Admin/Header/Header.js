import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import {  UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className="headeradmin">
        <Link className="title" to='/deshboard'>Admin Panel</Link>
        <Link className="pages" to="/deshboard">Home</Link>
        <Link className="pages" to="/product">Products</Link>
        <Link className="pages" to="">Orders</Link>
        <Link className="pages">Admins</Link>
        <Link className="pages">Users</Link>
        <Link className="pages">Messages</Link>
        <UserOutlined className="icon1" />
       
      </div>
    </>
  );
};

export default Header;
