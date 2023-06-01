import React, { useState } from "react";
import "./Order.scss";
import Header from "../Header/Header";

import { Typography,Card, Button } from "antd";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/FIrebase";

const Orders = () => {

    const [order, setOrder] = useState([]);

    const { Meta } = Card;

    const getDocuments = async () => {
        const getData = collection(firestore, "order");
        const name = await getDocs(getData);
        setOrder(name.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getDocuments();

  return (
    <div className="order">
      <div>
        <Header />
      </div>
      
      <div className="dishes">
        <Typography.Title className="dtitle">LATEST DISHES</Typography.Title>
      </div>
      <div className="main">
      {order.map((order, id) => {
            return (
              <Card className="dcard" key={id}>
                <Typography.Paragraph className="name">UserId : {order.userId}</Typography.Paragraph>
                <Typography.Paragraph className="name">Name : {order.name}</Typography.Paragraph>
                <Typography.Paragraph className="name">Number : {order.number}</Typography.Paragraph>
                <Typography.Paragraph className="name">Email : {order.email}</Typography.Paragraph>
                <Typography.Paragraph className="name">Address : {order.address}</Typography.Paragraph>
                <Typography.Paragraph className="name">Total amount : {order.total}</Typography.Paragraph>
                <Typography.Paragraph className="name">Date : {order.date}</Typography.Paragraph>
                <Button>Delete</Button>
              </Card>
            );
          })}
      </div>
      
    </div>
  );
};

export default Orders;
