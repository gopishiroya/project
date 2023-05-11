import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Card, Image, Input } from "antd";
import { EyeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import "./Category.scss";
import pizza from "../Image/pizza-1.png";

const { Meta } = Card;

const Category = () => {
  const [preview, setPreview] = useState(false);

  return (
    <div className="category">
      <div>
        <Header />
      </div>
      <div className="foodcategory">
        <div className="foodtitle">
          <Typography.Title className="ctitle">FOOD CATEGORY</Typography.Title>
          <div className="Container">
            <Card className="Fcard">
              <Image src={pizza} className="Fimage" preview={preview}></Image>
              <Meta className="meta" description="pizza" />
              <Typography.Title className="fprice">Rs. 100</Typography.Title>
              <Input className="foodinput" type="number" defaultValue={1} min={1} />
              <EyeFilled className="Eyefilled" />
              <ShoppingCartOutlined className="shoppingCartOutlined" />
            </Card>
            {/* <Card className="Fcard">
              <Image src={pizza} className="Fimage" preview={preview}></Image>
              <Meta className="meta" description="pizza" />
              <Typography.Title className="fprice">Rs. 100</Typography.Title>
              <Input className="foodinput" type="number" defaultValue={1} min={1} />
              <EyeFilled className="Eyefilled" />
              <ShoppingCartOutlined className="shoppingCartOutlined" />
            </Card>
            <Card className="Fcard">
              <Image src={pizza} className="Fimage" preview={preview}></Image>
              <Meta className="meta" description="pizza" />
              <Typography.Title className="fprice">Rs. 100</Typography.Title>
              <Input className="foodinput" type="number" defaultValue={1} min={1} />
              <EyeFilled className="Eyefilled" />
              <ShoppingCartOutlined className="shoppingCartOutlined" />
            </Card>
            <Card className="Fcard">
              <Image src={pizza} className="Fimage" preview={preview}></Image>
              <Meta className="meta" description="pizza" />
              <Typography.Title className="fprice">Rs. 100</Typography.Title>
              <Input className="foodinput" type="number" defaultValue={1} min={1} />
              <EyeFilled className="Eyefilled" />
              <ShoppingCartOutlined className="shoppingCartOutlined" />
            </Card> */}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Category;
