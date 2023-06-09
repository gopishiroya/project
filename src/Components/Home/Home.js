import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss";
import Typography from "antd/es/typography/Typography";
import { Card, Image, Input, Carousel } from "antd";
import cat1 from "../Image/cat-1.png";
import cat2 from "../Image/cat-2.png";
import cat3 from "../Image/cat-3.png";
import cat4 from "../Image/cat-4.png";
import { EyeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import image1 from "../Image/home-img-1.png";
import image2 from "../Image/home-img-2.png";
import image3 from "../Image/home-img-3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { auth, firestore } from "../../Firebase/FIrebase";
import {
  addDoc,
  collection,
  getDocs
} from "firebase/firestore";
const { Meta } = Card;
const Home = () => {
  const [preview, setPreview] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [uid, setuid] = useState(null);
  const getData = collection(firestore, "products");
  const navigate = useNavigate();

  useEffect(() => {
    getDocuments();
  }, []);
  
  const getDocuments = async () => {
    const result = await getDocs(getData);
    setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuid(user.displayName);
      } else {
        navigate("/");
      }
    });
  }, []);

  function handleChange(name) {
    if (uid !== null) {
      console.log("success");
    } else {
      navigate("/login");
    }
    setCount(count + 1);
    addDoc(collection(firestore, "cart " + uid), {
      id: name.id,
      category: name.category,
      imageURL: name.ImageURL,
      name: name.name,
      price: name.price,
      quantity: quantity,
    })
      .then(() => console.log("success"))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="home">
        <div>
          <Header count={count} user={uid} />
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
              <Link className="btnmenu" to="/menu">
                See Menus
              </Link>
            </div>
            <div className="section1">
              <Image className="islider" src={image2} preview={preview} />
              <Typography.Paragraph className="paragraph">
                Online Order
              </Typography.Paragraph>
              <Typography.Title className="stitle">
                chezzy burger
              </Typography.Title>
              <Link className="btnmenu" to="/menu">
                See Menus
              </Link>
            </div>
            <div className="section1">
              <Image className="islider" src={image3} preview={preview} />
              <Typography.Paragraph className="paragraph">
                Online Order
              </Typography.Paragraph>
              <Typography.Title className="stitle">
                Mini sandwich
              </Typography.Title>
              <Link className="btnmenu" to="/menu">
                See Menus
              </Link>
            </div>
          </Carousel>
        </div>
        <div className="category">
          <Typography.Title className="title">FOOD CATEGORY</Typography.Title>
          <div className="container">
            <Link to="/category">
              <Card className="card">
                <Image src={cat1} className="image" preview={preview}></Image>
                <Meta className="meta" title="Fast Food" />
              </Card>
            </Link>
            <Link to="/category">
              <Card className="card">
                <Image src={cat2} className="image" preview={preview}></Image>
                <Meta className="meta" title="Main Dishes" />
              </Card>
            </Link>
            <Link to="/category">
              <Card className="card">
                <Image src={cat3} className="image" preview={preview}></Image>
                <Meta className="meta" title="Drinks" />
              </Card>
            </Link>
            <Link to="/category">
              <Card className="card">
                <Image src={cat4} className="image" preview={preview}></Image>
                <Meta className="meta" title="Desserts" />
              </Card>
            </Link>
          </div>
        </div>
        <div className="dishes">
          <Typography.Title className="dtitle">LATEST DISHES</Typography.Title>
          <div className="container">
            {products.map((products, id) => {
              return (
                <Card className="dcard" key={id}>
                  <Image
                    src={products.ImageURL}
                    className="dimage"
                    preview={preview}
                  ></Image>
                  <Meta
                    className="meta"
                    title={products.category}
                    description={products.name}
                  />
                  <Typography.Title className="price">
                    Rs. {products.price}
                  </Typography.Title>
                  <Input
                    className="input"
                    type="number"
                    defaultValue={1}
                    min={1}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <Link to={"/quickview/" + products.id}>
                    <EyeFilled className="eyefilled" />
                  </Link>
                  <ShoppingCartOutlined
                    className="ShoppingCartOutlined"
                    onClick={() => handleChange(products)}
                  />
                </Card>
              );
            })}
          </div>
        </div>
        <div className="Link">
          <Link className="button" to="/menu">
            View All
          </Link>
        </div>
        <div className="main">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
