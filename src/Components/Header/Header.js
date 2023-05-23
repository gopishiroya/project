import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Popover, Typography } from "antd";

const Header = (props) => {
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

        <div className="icon">
          <Popover
            placement="bottomRight"
            className="icon1"
            title={text}
            content={content}
            trigger="hover"
          >
            <UserOutlined className="icon1" />
          </Popover>
          <div className="cart">
            <Badge count={props.count} size="large" className="notification">
              <ShoppingCartOutlined className="icon2" />
            </Badge>
          </div>
          <SearchOutlined className="icon3" />
        </div>
      </div>
    </>
  );
};

export default Header;
