import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import "./UpdateAddress.scss";
import { auth, firestore } from "../../Firebase/FIrebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

const UpdateAddress = () => {
  const [flatNo, setFlatNo] = useState("");
  const [buildingNo, setBuildingNo] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [data, setData] = useState([]);
  const [uid, setuid] = useState(null);
  
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

  useEffect(() => {
    getDocuments();
  }, []);

  const getData = collection(firestore, "user");
  const getDocuments = async () => {
    const result = await getDocs(getData);
    setData(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div className="updateaddress">
      <div>
        <Header user={uid} />
      </div>
      
      <div className="uForm">
        <Form className="uForm1">
          <Typography.Title className="updateaddresstitle">
            YOUR ADDRESS
          </Typography.Title>
          <div className="updateInputfield">
            <Input
              className="updateInput"
              type="text"
              placeholder="flat no."
              value={flatNo}
              onChange={(e) => setFlatNo(e.target.value)}
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="building no."
              value={buildingNo}
              onChange={(e) => setBuildingNo(e.target.value)}
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="area name"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="state name"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="country name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="pin code"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <div className="updateaddressnow">
              <Link className="anow" to="/checkout">
                save address
              </Link>
            </div>
          </div>
        </Form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UpdateAddress;
