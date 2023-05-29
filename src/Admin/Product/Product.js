import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Product.scss";
import { Link } from "react-router-dom";
import {
  Form,
  Select,
  Typography,
  Upload,
  Input,
  Button,
  Card,
  Image,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { StorageInitaiate } from "../../Action/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { firestore, storage } from "../../Firebase/FIrebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
const { Meta } = Card;

const Product = () => {
  const [preview, setPreview] = useState(false);
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    getDocuments();
  }, [pname, price, category, pic]);

  const getData = collection(firestore, "products");
  const getDocuments = async () => {
    const result = await getDocs(getData);
    setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  const props = {
    name: "file",
    beforeUpload: (file) => {
      setPic(file);
      return false;
    },
  };

  useEffect(() => {
    const starsRef = ref(storage, `uploads/images/${pic.name}`);
    getDownloadURL(starsRef)
      .then((iurl) => {
        setUrl(iurl);
        console.log(url);
      })
      .catch((error) => console.log(error));
  }, [pic]);

  async function handleAddProducts(e) {
    e.preventDefault();

    const imageRef = ref(storage, `uploads/images/${pic.name}`);
    const uploadResult = await uploadBytes(imageRef, pic);

    addDoc(collection(firestore, "products"), {
      name: pname,
      price: price,
      category: category,
      ImageURL: url,
    })
      .then(() => console.log("success"))
      .catch(() => console.log("error"));

    setPname("");
    setPrice("");
    toast.success("product added successfully");
  }

  async function handleDelete(products) {
    await deleteDoc(doc(firestore, "products", products.id));
    toast.success("products delete successfully");
    getDocuments();
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <ToastContainer />
      <div className="productform">
        <Form className="form1">
          <Typography.Title className="formtitle">
            Add Products
          </Typography.Title>
          <div className="inputfield">
            <Input
              className="input"
              type="text"
              placeholder="Enter Product Name"
              value={pname}
              onChange={(e) => setPname(e.target.value)}
            />
            <Input
              className="input"
              type="text"
              placeholder="Enter Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Select
              placeholder="-- Select Category --"
              className="select"
              onChange={(value) => setCategory(value)}
              options={[
                {
                  value: "full-dish",
                  label: "Full Dish",
                },
                {
                  value: "fast-food",
                  label: "Fast Food",
                },
                {
                  value: "drink",
                  label: "Drinks",
                },
                {
                  value: "dessert",
                  label: "Desserts",
                },
              ]}
            />
            <Upload
              listType="picture"
              className="upload-list-inline"
              id="file"
              {...props}
            >
              <Button className="upload" icon={<UploadOutlined />}>
                Choose Product
              </Button>
            </Upload>
          </div>
          <br />
          <Button
            htmlType="submit"
            className="productbtn"
            onClick={handleAddProducts}
          >
            Add Products
          </Button>
        </Form>
      </div>
      <div className="product">
        <div className="container">
          {products.map((products, id) => {
            return (
              <Card className="dcard" key={id}>
                <Image
                  src={products.ImageURL}
                  className="dimage"
                  preview={preview}
                ></Image>
                <div className="row">
                  <Meta
                    className="meta"
                    title={products.name}
                    description={products.category}
                  />
                  <Typography.Paragraph className="price">
                    {products.price}
                  </Typography.Paragraph>
                </div>
                <div className="linkrow">
                  <Link className="link1" to={"/updateproducts/" + products.id}>
                    Update
                  </Link>
                  <Button
                    className="link2"
                    onClick={() => handleDelete(products)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
