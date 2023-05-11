import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Popover, Typography } from "antd";

const text = (
  <Typography.Title className="usertext">
    Please Login First!👇
  </Typography.Title>
);
const content = (
  <div className="loginbtnpopup">
    <Link to="/login" className="loginbtninner">
      Login Now
    </Link>
  </div>
);

const Header = () => {
  return (
    <>
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

        <Popover
          placement="bottomRight"
          className="icon1"
          title={text}
          content={content}
          trigger="click"
        >
          <UserOutlined className="icon1" />
        </Popover>
        <ShoppingCartOutlined className="icon2" />
        <SearchOutlined className="icon3" />
      </div>
    </>
  );
};

export default Header;
