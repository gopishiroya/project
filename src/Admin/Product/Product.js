import React from "react";
import Header from "../Header/Header";
import "./Product.scss";
import { Form, Select, Typography, Upload, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Product = () => {
  return (
    <>
  
      <div>
        <Header />
      </div>
      
      <div className="form">
        <Form className="form1">
          <Typography.Title className="formtitle">
            Add Products
          </Typography.Title>
          <div className="inputfield">
            <Input
              className="input"
              type="text"
              placeholder="Enter Product Name"
            />
            <Input
              className="input"
              type="text"
              placeholder="Enter Product Price"
            />

            <Select
              placeholder="Select Category--"
              className="select"
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                },
              ]}
            />

            <Upload listType="picture" className="upload-list-inline">
              <Button className="upload" icon={<UploadOutlined />}>Choose Product</Button>
            </Upload>
          </div>
          <br />
          <Button type="primary" htmlType="submit" className="btn">
            Add Products
          </Button>
        </Form>
      </div>
     
    </>
  );
};

export default Product;
