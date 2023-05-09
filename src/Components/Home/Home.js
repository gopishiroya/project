import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss";
import Typography from "antd/es/typography/Typography";
import { Card, Image, Input, Carousel, Button } from "antd";
import cat1 from "../Image/cat-1.png";
import cat2 from "../Image/cat-2.png";
import cat3 from "../Image/cat-3.png";
import cat4 from "../Image/cat-4.png";
import pizza from "../Image/pizza-1.png";
import { EyeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import image1 from "../Image/home-img-1.png";
import image2 from "../Image/home-img-2.png";
import image3 from "../Image/home-img-3.jpg";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Home = () => {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <div className="home">
        <div>
          <Header />
        </div>
        <div className="slider">
          <Carousel autoplay>
            <div className="section1">
              <Image className="islider" src={image1} preview={preview} />
              <Typography.Paragraph className="paragraph">
                Online Order
              </Typography.Paragraph>
              <Typography.Title className="stitle">
                Delicious Pizza
              </Typography.Title>
              <Link className="btnmenu">See Menus</Link>
            </div>
            <div className="section1">
              <Image className="islider" src={image2} preview={preview} />
              <Typography.Paragraph className="paragraph">
                Online Order
              </Typography.Paragraph>
              <Typography.Title className="stitle">
                chezzy burger
              </Typography.Title>
              <Link className="btnmenu">See Menus</Link>
            </div>
            <div className="section1">
              <Image className="islider" src={image3} preview={preview} />
              <Typography.Paragraph className="paragraph">
                Online Order
              </Typography.Paragraph>
              <Typography.Title className="stitle">
                Mini sandwich
              </Typography.Title>
              <Link className="btnmenu">See Menus</Link>
            </div>
          </Carousel>
        </div>
        <div className="category">
          <Typography.Title className="title">FOOD CATEGORY</Typography.Title>
          <div className="container">
            <Card className="card">
              <Image src={cat1} className="image" preview={preview}></Image>
              <Meta className="meta" title="Fast Food" />
            </Card>
            <Card className="card">
              <Image src={cat2} className="image" preview={preview}></Image>
              <Meta className="meta" title="Main Dishes" />
            </Card>
            <Card className="card">
              <Image src={cat3} className="image" preview={preview}></Image>
              <Meta className="meta" title="Drinks" />
            </Card>
            <Card className="card">
              <Image src={cat4} className="image" preview={preview}></Image>
              <Meta className="meta" title="Desserts" />
            </Card>
          </div>
        </div>
        <div className="dishes">
          <Typography.Title className="dtitle">LATEST DISHES</Typography.Title>
          <div className="container">
            <Card className="dcard">
              <Image src={pizza} className="dimage" preview={preview}></Image>
              <Meta className="meta" title="fast food" description="pizza" />
              <Typography.Title className="price">Rs. 100</Typography.Title>
              <Input className="input" type="number" defaultValue={1} min={1} />
              <EyeFilled className="eyefilled" />
              <ShoppingCartOutlined className="ShoppingCartOutlined" />
            </Card>
            <Card className="dcard">
              <Image src={pizza} className="dimage" preview={preview}></Image>
              <Meta className="meta" title="fast food" description="pizza" />
              <Typography.Title className="price">Rs. 100</Typography.Title>
              <Input className="input" type="number" defaultValue={1} min={1} />
              <EyeFilled className="eyefilled" />
              <ShoppingCartOutlined className="ShoppingCartOutlined" />
            </Card>
            <Card className="dcard">
              <Image src={pizza} className="dimage" preview={preview}></Image>
              <Meta className="meta" title="fast food" description="pizza" />
              <Typography.Title className="price">Rs. 100</Typography.Title>
              <Input className="input" type="number" defaultValue={1} min={1} />
              <EyeFilled className="eyefilled" />
              <ShoppingCartOutlined className="ShoppingCartOutlined" />
            </Card>
            <Card className="dcard">
              <Image src={pizza} className="dimage" preview={preview}></Image>
              <Meta className="meta" title="fast food" description="pizza" />
              <Typography.Title className="price">Rs. 100</Typography.Title>
              <Input className="input" type="number" defaultValue={1} min={1} />
              <EyeFilled className="eyefilled" />
              <ShoppingCartOutlined className="ShoppingCartOutlined" />
            </Card>
          </div>
        </div>
        <Button className="button">View All</Button>
        <div className="main">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
