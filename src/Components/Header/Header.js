import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link className="title" to='/'>yum-yum 😋</Link>
        <Link className="pages" to="/">Home</Link>
        <Link className="pages" to="/about">About</Link>
        <Link className="pages">Menu</Link>
        <Link className="pages">Orders</Link>
        <Link className="pages">Contact</Link>
        <SearchOutlined className="icon1" />
        <ShoppingCartOutlined className="icon2" />
        <UserOutlined className="icon3" />
        
      </div>
    </>
  );
};

export default Header;
