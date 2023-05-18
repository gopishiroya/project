import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Typography } from "antd";
import "./QuickView.scss";
import { Card, Image, Input } from "antd";
import { useState } from "react";
import pizza from "../Image/Pizza.jpg";

const { Meta } = Card;

const QuickView = () => {
  const [preview, setPreview] = useState(false);

  return (
    <div className="quickview">
      <Header />
      <div className="qdishes">
        <Typography.Title className="qtitle">QUICK VIEW</Typography.Title>
        <div className="qcontainer">
          <Card className="qcard">
            <Image src={pizza} className="qimage" preview={preview}></Image>
            <Meta className="meta" title="fast food" description="pizza" />
            <Typography.Title className="qprice">Rs. 200</Typography.Title>
            <Input className="qinput" type="number" defaultValue={1} min={1} />
            <Button className="qbutton">Add To Cart</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuickView;
