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
import { StorageInitaiate, getDataInitaiate } from "../../Action/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/FIrebase";

const { Meta } = Card;

const Product = () => {
  const [preview, setPreview] = useState(false);
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  const [products, setProducts] = useState([]);

  const getData = collection(firestore, "products");

  useEffect(() => {
    const getDocuments = async () => {
      const result = await getDocs(getData);
      setProducts(result.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getDocuments();
  }, []);

  const dispatch = useDispatch();
  const props = {
    name: "file",
    beforeUpload: (file) => {
      setPic(file);
      return false;
    },
  };

  function handleAddProducts(e) {
    e.preventDefault();
    dispatch(StorageInitaiate(pname, price, category, pic));
    setPname("");
    setPrice("");
    // setPic("");
    // setCategory("");
    toast.success("product added successfully");
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
          {products.map((data) => {
            return (
              <Card className="dcard">
                <Image
                  src={data.imageURL}
                  className="dimage"
                  preview={preview}
                ></Image>
                <div className="row">
                  <Meta
                    className="meta"
                    title={data.name}
                    description={data.category}
                  />
                  <Typography.Paragraph className="price">
                    {data.price}
                  </Typography.Paragraph>
                </div>
                <div className="linkrow">
                  <Link className="link1">Update</Link>
                  <Button className="link2">Delete</Button>
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
