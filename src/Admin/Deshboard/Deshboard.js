import React from "react";
import "./Deshboard.scss"
import Header from "../Header/Header";
import Typography from "antd/es/typography/Typography";
import { Button, Card, Input } from "antd";
const { Meta } = Card;

export const Deshboard = () => {
  return (
    <>
      <div className="home">
        <div>
          <Header />
        </div>
        <div className="facility">
          <Typography.Title className="title">Dashboard</Typography.Title>
          <div className="container">
            <Card className="card">
              <Meta className="meta" title="WELCOME!" />
              <Typography.Paragraph >Dashboard</Typography.Paragraph>
              <Input type="text" defaultValue="Ekta" disabled />
              <Button>Update Profile</Button>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Orders" />
              <Input type="text" defaultValue="2" disabled />
              <Button>See Orders</Button>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Add Products" />
              <Input type="text" defaultValue="4" disabled />
              <Button>See Products</Button>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Users" />
              <Input type="text" defaultValue="2" disabled />
              <Button>See Users</Button>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Admins" />
              <Input type="text" defaultValue="2" disabled />
              <Button>See Admins</Button>
            </Card>
            <Card className="card">
              <Meta className="meta" title="User Messages" />
              <Input type="text" defaultValue="3" disabled />
              <Button>See Messages</Button>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Pending Orders" />
              <Input type="text" defaultValue="2" disabled />
              <Button>See Pending Orders</Button>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Compalted Orders" />
              <Input type="text" defaultValue="5" disabled />
              <Button>See Compalted Orders</Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
