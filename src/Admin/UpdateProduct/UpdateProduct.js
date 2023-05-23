import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Form, Image, Input } from "antd";
import { Typography, Upload } from "antd";
import { Select } from "antd";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./UpdateProduct.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { firestore, getData } from "../../Firebase/FIrebase";
import { doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateProduct = (props) => {
  const [preview, setPreview] = useState(false);
  const [products, setProducts] = useState("");
  const [pic, setPic] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getData(params.id).then((value) => setProducts(value.data()));
  }, []);
  // console.log(products);
  const prop = {
    name: "file",
    beforeUpload: (file) => {
      setPic(file);
      return false;
    },
  };
  const path = doc(firestore, "products", params.id);
  async function handleUpdate(e) {
    e.preventDefault();
    const data = {
      name: products.name,
      price: products.price,
      category: products.category,
    };
    setDoc(path, data)
      .then((path) => console.log(path))
      .catch((error) => console.log(error));
    toast.success("updated successfully");
    navigate("/product");
  }
  return (
    <div>
      <Header />
      <div className="updateproduct">
        <Typography.Title className="updatetitle">
          Update Product
        </Typography.Title>
        <Form className="form1">
          <div className="uImage">
            <Image
              src={products?.imageURL}
              preview={preview}
              className="images"
            />
          </div>
          <div className="inputfield">
            <Typography.Title className="updateParagraph">
              Update Name :
            </Typography.Title>
            <Input
              className="input"
              type="text"
              placeholder="Product Name"
              value={products.name}
              onChange={(e) => {
                setProducts((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
            <Typography.Title className="updateParagraph">
              Update Price :{" "}
            </Typography.Title>
            <Input
              className="input"
              type="text"
              placeholder="Product Price"
              value={products.price}
              onChange={(e) => {
                setProducts((pre) => {
                  return { ...pre, price: e.target.value };
                });
              }}
            />
            <Typography.Title className="updateParagraph">
              Update Category :{" "}
            </Typography.Title>
            <Select
              placeholder="-- Select Category --"
              className="select"
              value={products.category}
              onChange={(value) => {
                setProducts((pre) => {
                  return { ...pre, category: value };
                });
              }}
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
            <Typography.Title className="updateParagraph">
              Update Image :{" "}
            </Typography.Title>
            <Upload listType="picture" className="upload-list-inline" {...prop}>
              <Button className="upload" icon={<UploadOutlined />}>
                Choose Product
              </Button>
            </Upload>
          </div>
          <div className="link">
            <Button className="productbtn" onClick={handleUpdate}>
              Update
            </Button>
            <Link to="/product" className="productbtngoback">
              Go Back
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default UpdateProduct;