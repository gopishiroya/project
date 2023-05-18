import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { Card, Image, Input } from "antd";
import { EyeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore, storage } from "../../Firebase/FIrebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const { Meta } = Card;

const Menu = () => {
  const [preview, setPreview] = useState(false);
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState([]);

  const getData = collection(firestore, "products");

  useEffect(() => {
    getDocuments();
  }, []);
  
  const imageRef = ref(storage, "uploads/images/");
  useEffect(() => {
    listAll(imageRef).then((res) => {
      res.items.map((item) => {
        return (
          getDownloadURL(item).then((url) => {
            setUrl((prev) => [...prev, url]);
          })
        )
      })
    });
  }, []);

  const getDocuments = async () => {
    const result = await getDocs(getData);
    setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div className="menu">
      <Header />
      <div className="menutitle">
        <Typography.Title className="mtitle">Our Menu</Typography.Title>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/menu" className="mmenu">
          / menu
        </Link>
      </div>
      <div className="dishes">
        <Typography.Title className="dtitle">LATEST DISHES</Typography.Title>
        <div className="container">
          {products.map((products, id) => {
            return (
              <Card className="dcard" key={id}>
                <Image src={url} className="dimage" preview={preview}></Image>
                <Meta className="meta" title={products.category} description={products.name} />
                <Typography.Title className="price">Rs. {products.price}</Typography.Title>
                <Input
                  className="input"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <EyeFilled className="eyefilled" />
                <ShoppingCartOutlined className="ShoppingCartOutlined" />
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Menu;
