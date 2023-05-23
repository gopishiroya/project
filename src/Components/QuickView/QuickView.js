import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Typography } from "antd";
import "./QuickView.scss";
import { Card, Image, Input } from "antd";
import { useState } from "react";
import pizza from "../Image/Pizza.jpg";
import { useParams } from "react-router-dom";
import { getData } from "../../Firebase/FIrebase";

const { Meta } = Card;

const QuickView = () => {
  const [preview, setPreview] = useState(false);
  const [products, setProducts] = useState("");

  const params = useParams();
  console.log(params);

  useEffect(() => {
    getData(params.id).then((value) => setProducts(value.data()));
  }, []);
  console.log(products);

  return (
    <div className="quickview">
      <Header />
      <div className="qdishes">
        <Typography.Title className="qtitle">QUICK VIEW</Typography.Title>
        <div className="qcontainer">
          <Card className="qcard">
            <Image src={pizza} className="qimage" preview={preview}></Image>
            <Meta className="meta" title={products.category} description={products.name} />
            <Typography.Title className="qprice">Rs. {products.price}</Typography.Title>
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
