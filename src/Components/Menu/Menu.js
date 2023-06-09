import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { Card, Image, Input } from "antd";
import { EyeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore, storage } from "../../Firebase/FIrebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { auth } from "../../Firebase/FIrebase";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const Menu = () => {
  const [preview, setPreview] = useState(false);
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState([]);
  const [uid, setuid] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(0);
  const navigate = useNavigate(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuid(user.displayName);
      } else {
        navigate("/");
      }
    });
  }, []);

  const getData = collection(firestore, "products");
  useEffect(() => {
    getDocuments();
  }, []);
  const imageRef = ref(storage, "uploads/images/");
  useEffect(() => {
    listAll(imageRef).then((res) => {
      res.items.map((item) => {
        return getDownloadURL(item).then((url) => {
          setUrl((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  const getDocuments = async () => {
    const result = await getDocs(getData);
    setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  async function handleCart(name) {
    if (uid !== null) {
      console.log(products);
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
    <div className="menu">
      <Header user={uid} count={count} />
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
                <Image src={products.ImageURL} className="dimage" preview={preview}></Image>
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
                  onClick={() => handleCart(products)}
                />
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