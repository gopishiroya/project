import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Form, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import "./UpdateAddress.scss";
import { auth, firestore } from "../../Firebase/FIrebase";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const UpdateAddress = () => {
  const [flatNo, setFlatNo] = useState("");
  const [buildingNo, setBuildingNo] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [uid, setuid] = useState(null);
  const [userId, setUserId] = useState("");
  const [currentUserData, setCurrentUserData] = useState("");
  
  const navigate = useNavigate(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuid(user.displayName);
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);

  async function getCurrentUserData() {
    const docRef = doc(firestore, "user", userId);
    const docsnap = await getDoc(docRef);
    if(docsnap.exists()) {
      setCurrentUserData(docsnap.data());
    }
    else {
      console.log("error");
    }
  }
  getCurrentUserData();

  function handleAddress() {
    const docRef = collection(firestore, "user");
    const ref = setDoc(doc(docRef, userId), {
      name: currentUserData.name,
      phone: currentUserData.phone,
      email: currentUserData.email,
      password: currentUserData.password,
      address: `${flatNo}, ${buildingNo}, ${area}, ${city}, ${state}, ${country}, ${pin}`
    })
      .then(() => console.log("success"))
      .catch((error) => console.log(error));
      console.log(ref);
  }

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
              <Link className="anow" to="/checkout" onClick={handleAddress}>
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
