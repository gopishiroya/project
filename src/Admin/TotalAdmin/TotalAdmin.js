import React from "react";
import Header from "../Header/Header";
import { Typography, Card, Button } from "antd";
import "./TotalAdmin.scss";
import { Link } from "react-router-dom";
const { Meta } = Card;

const TotalAdmin = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="body">
        <Typography.Title className="title">Admins Account</Typography.Title>
        <div className="container">
          <Card className="maincard">
            <div className="maincardrow">
              <Meta className="meta" title="Register New Admin" />
              <Link className="maincardlink">Regiter</Link>
            </div>
          </Card>

          <Card className="defcard">
            <div className="defcardrow">
              <Meta
                className="meta"
                title="Admin id : #"
                description="Admin Name : #"
              />
              <Button className="defcardbtn">Delete</Button>
            </div>
          </Card>
         
          <Card className="defcard">
            <div className="defcardrow">
              <Meta
                className="meta"
                title="Admin id : #"
                description="Admin Name : #"
              />
              <Button className="defcardbtn">Delete</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TotalAdmin;
