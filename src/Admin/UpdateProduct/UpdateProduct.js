import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Form, Image, Input } from "antd";
import { Typography, Upload } from "antd";
import { Select } from "antd";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./UpdateProduct.scss";
import cake from "../../Components/Image/home-img-3.jpg";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../Firebase/FIrebase";

const UpdateProduct = (props) => {
  const [preview, setPreview] = useState(false);
  const [products, setProducts] = useState([]);
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    getData(params.id).then((value) => setProducts(value.data()));
  }, []);
  const prop = {
    name: "file",
    beforeUpload: (file) => {
      setPic(file);
      return false;
    },
  };
  
  return (
    <div>
      <Header />
      <div className="updateproduct">
        <Typography.Title className="updatetitle">
          Update Product
        </Typography.Title>
        <Form className="form1">
          <div className="uImage">
            <Image src={products.imageURL} preview={preview} className="images" />
          </div>
          <div className="inputfield">
            <Typography.Title className="updateParagraph">
              Update Name :{" "}
            </Typography.Title>
            <Input
              className="input"
              type="text"
              value={products.name}
              onChange={(e) => setPname(e.target.value)}
            />
            <Typography.Title className="updateParagraph">
              Update Price :{" "}
            </Typography.Title>
            <Input
              className="input"
              type="text"
              placeholder="Enter Product Price"
              value={products.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Typography.Title className="updateParagraph">
              Update Category :{" "}
            </Typography.Title>
            <Select
              placeholder="-- Select Category --"
              className="select"
              value={products.category}
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
            <Button className="productbtn">Update</Button>
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
