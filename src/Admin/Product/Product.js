import React, { useState } from "react";
import Header from "../Header/Header";
import "./Product.scss";
import { Link } from "react-router-dom";
import { Form, Select, Typography, Upload, Input, Button ,Card,Image} from "antd";
import drink from '../../Components/Image/drink-1.png';
import { UploadOutlined } from "@ant-design/icons";

const { Meta } = Card;
const handleChange = (value) => {
     console.log(`${value}`);
};
const uploadChange = (value) => {
  console.log(`upload ${value.file.name}`);
};
const inputname = (value) => {
  console.log(`input  ${value.data}`);
};
const inputprice = (value) => {
  console.log(`input  ${value.data}`);
};

const Product = () => {
  const [preview, setPreview] = useState(false);
  return (
    <>
  
      <div>
        <Header />
      </div>
      
      <div className="productform">
        <Form className="form1">
          <Typography.Title className="formtitle">
            Add Products
          </Typography.Title>
          <div className="inputfield">
            <Input
              className="input"      
              onChange={inputname} 
              type="text"
              placeholder="Enter Product Name"
            />
            <Input
              className="input"
              onBeforeInput={inputprice} 
              type="text"
              placeholder="Enter Product Price"
            />

            <Select
              placeholder="-- Select Category --"
              className="select"
              onChange={handleChange}
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

            <Upload listType="picture"
              onChange={uploadChange} 
            className="upload-list-inline">
              <Button className="upload" icon={<UploadOutlined />}>Choose Product</Button>
            </Upload>
          </div>
          <br />
          <Button htmlType="submit" className="productbtn">
            Add Products
          </Button>
        </Form>
      </div>
      
      <div className="product">
          <div className="container">
          <Card className="dcard">
              <Image src={drink} className="dimage" preview={preview}></Image>
              <div className="row">
              <Meta className="meta" title= "Mengo drink"description="Drinks"/>
              <Typography.Paragraph className="price">Rs.100/-</Typography.Paragraph>
              </div>
              <div className="linkrow">
                <Link className="link1">Update</Link>
                {/* <Link className="link2">Delete</Link> */}
                <Button className="link2">Delete</Button>
              </div>
              
            </Card>
            <Card className="dcard">
              <Image src={drink} className="dimage" preview={preview}></Image>
              <div className="row">
              <Meta className="meta" title= "Mengo drink"description="Drinks"/>
              <Typography.Paragraph className="price">Rs.100/-</Typography.Paragraph>
              </div>
              <div className="linkrow">
                <Link className="link1">Update</Link>
                <Button className="link2">Delete</Button>
              </div>
              
            </Card>
           
          </div>
        
      </div>
     
    </>
  );
};

export default Product;
