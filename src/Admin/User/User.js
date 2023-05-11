import React from "react";
import Header from "../Header/Header";
import { Typography, Card, Button } from "antd";
import "./User.scss";
const { Meta } = Card;

const User = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="userbody">
        <Typography.Title className="title">Users Account</Typography.Title>
        <div className="container">
          <Card className="usercard">
            <div className="usercardrow">
              <Meta
                className="meta"
                title="User id : #"
                description="User Name : #"
              />
              <Button className="usercardbtn">Delete</Button>
            </div>
          </Card>
          <Card className="usercard">
            <div className="usercardrow">
              <Meta
                className="meta"
                title="User id : #"
                description="User Name : #"
              />
              <Button className="usercardbtn">Delete</Button>
            </div>
          </Card>
          <Card className="usercard">
            <div className="usercardrow">
              <Meta
                className="meta"
                title="User id : #"
                description="User Name : #"
              />
              <Button className="usercardbtn">Delete</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default User;
