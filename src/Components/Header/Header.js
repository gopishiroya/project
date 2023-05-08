import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

const items = [
  {
    key: "1",
    label: (
      <Typography.Paragraph className="dropdown">please login first!</Typography.Paragraph>
    )
  },
  {
    key: "2",
    label: (
      <Link className="btn" to="/login">Login</Link>
    )
  }
]

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
        <SearchOutlined className="icon1" />
        <ShoppingCartOutlined className="icon2" />
        <Dropdown menu = {{ items }}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
            <UserOutlined className="icon3" />
            </Space>
          </Link>
        </Dropdown>
      </div>
    </>
  );
};

export default Header;
