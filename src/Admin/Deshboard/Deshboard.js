import React from "react";
import "./Deshboard.scss"
import Header from "../Header/Header";
import Typography from "antd/es/typography/Typography";
import {Card} from "antd";
import { Link } from "react-router-dom"; 
const { Meta } = Card;

const Deshboard = () => {
  return (
    <>
    <div>
          <Header />
        </div>
      <div className="deshboard">
        
        <div className="facility">
          <Typography.Title className="title">Dashboard</Typography.Title>
          <div className="container">
            <Card className="card">
              <Meta className="meta" title="WELCOME!" />
              <Typography.Paragraph className="Paragraph">Ekta</Typography.Paragraph>    
              <Link to="/Updateprofile" className="link">Update Profile</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Add Products" />
              <Typography.Paragraph className="Paragraph">4</Typography.Paragraph>
              <Link to="/product" className="link">See Products</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Orders" />
              <Typography.Paragraph className="Paragraph">2</Typography.Paragraph>
              <Link className="link">See Orders</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Admins" />
              <Typography.Paragraph className="Paragraph">2</Typography.Paragraph>
              <Link to="/Totaladmin" className="link">See Admins</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Users" />
              <Typography.Paragraph className="Paragraph">2</Typography.Paragraph>
              <Link to="/User" className="link">See Users</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="User Messages" />
              <Typography.Paragraph className="Paragraph">3</Typography.Paragraph>
              <Link to="/Message" className="link">See Messages</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Pending Orders" />
              <Typography.Paragraph className="Paragraph">2</Typography.Paragraph>
              <Link className="link">See Orders</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Compalted Orders" />
              <Typography.Paragraph className="Paragraph">5</Typography.Paragraph>
              <Link className="link">See Orders</Link>  
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};


export default Deshboard