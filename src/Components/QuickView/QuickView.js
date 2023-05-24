import React, { useEffect,useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Typography , Card, Image, Input} from "antd";
import "./QuickView.scss";
import pizza from "../Image/Pizza.jpg";
import { useParams } from "react-router-dom";
import { getData } from "../../Firebase/FIrebase";
import { auth } from "../../Firebase/FIrebase";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const QuickView = () => {
  
  const [preview, setPreview] = useState(false);
  const [products, setProducts] = useState("");
  const navigate = useNavigate(null);

  const params = useParams();
  console.log(params);

  function Getuserid() {
    const [uid, setuid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setuid(user.email);
        } else {
          navigate("/");
        }
      });
    }, []);
    return uid;
  }
  const uid = Getuserid();
  console.log(uid);

  useEffect(() => {
    getData(params.id).then((value) => setProducts(value.data()));
  }, []);
  console.log(products);

  return (
    <div className="quickview">
      <Header  user={uid} />
      <div className="qdishes">
        <Typography.Title className="qtitle">QUICK VIEW</Typography.Title>
        <div className="qcontainer">
          <Card className="qcard">
            <Image src={pizza} className="qimage" preview={preview}></Image>
            <Meta className="meta" title={products.category} description={products.name} />
            <Typography.Title className="qprice">Rs. {products.price}</Typography.Title>
            <Input className="qinput" type="number" defaultValue={1} min={1} />
            <Button className="qbutton">Add To Cart</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuickView;
