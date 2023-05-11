import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { UserOutlined } from "@ant-design/icons";
import { Button, Popover, Typography } from "antd";

// const text = <span style={{color:"#6c4c4c;", fontSize:"18px;"}}>Ekta</span>;
const text = <Typography.Title className="text">Ekta</Typography.Title>;
const content = (
  <div className="logoutbtn">
    <Button className="logoutbtninner">Logout</Button>
  </div>
);

const Header = () => {
  return (
    <>
      <div className="headeradmin">
        <Link className="title" to="/deshboard">
          Admin Panel
        </Link>
        <Link className="pages" to="/deshboard">
          Home
        </Link>
        <Link className="pages" to="/product">
          Products
        </Link>
        <Link className="pages" to="">
          Orders
        </Link>
        <Link className="pages" to="/Totaladmin">
          Admins
        </Link>
        <Link className="pages" to="/User">
          Users
        </Link>
        <Link className="pages" to="/Message">
          Messages
        </Link>
        {/* <div className="popup"> */}
        <Popover
          placement="bottomRight"
          className="popup"
          title={text}
          content={content}
          trigger="click"
        >
          <UserOutlined className="icon1" />
        </Popover>
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;
