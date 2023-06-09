import React, { useState, useEffect } from "react";
import "./Deshboard.scss";
import Header from "../Header/Header";
import Typography from "antd/es/typography/Typography";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { collection, getCountFromServer, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/FIrebase";
const { Meta } = Card;

const Deshboard = () => {
<<<<<<< HEAD
  const [user, setuser] = useState([]);
  const [message, setmessage] = useState([]);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    messagecount();
  }, []);

  useEffect(() => {
    usercount();
  }, []);
  useEffect(() => {
    productcount();
  }, []);
  async function messagecount() {
    const coll = collection(firestore, "contect");
    const snapshot = await getCountFromServer(coll);
    setmessage(snapshot.data().count);
  }

  async function usercount() {
    const coll = collection(firestore, "user");
    const snapshot = await getCountFromServer(coll);
    setuser(snapshot.data().count);
  }
  async function productcount() {
    const coll = collection(firestore, "products");
    const snapshot = await getCountFromServer(coll);
    setproduct(snapshot.data().count);
  }
=======
  const [user,setuser]=useState([])
  const [message,setmessage]=useState([])
  const [product,setproduct]=useState([])
  const [order,setorder]=useState([])
   
  useEffect(()=>{
    messagecount()
  })
  useEffect(()=>{
    ordercount()
  })
   
  useEffect(()=>{
    usercount()
  })
  useEffect(()=>{
    productcount()
  })
async function messagecount(){
  const coll = collection(firestore, "contect");
const snapshot =await getCountFromServer(coll);
setmessage( snapshot.data().count);
}
async function usercount(){
  const coll = collection(firestore, "user");
const snapshot =await getCountFromServer(coll);
setuser( snapshot.data().count);
}
async function productcount(){
  const coll = collection(firestore, "products");
const snapshot =await getCountFromServer(coll);
setproduct( snapshot.data().count);
}
async function ordercount(){
  const coll = collection(firestore, "order");
const snapshot =await getCountFromServer(coll);
setorder( snapshot.data().count);
}
>>>>>>> 55ac95e789a12b7703d30b790fa977468e6ab99a
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="deshboard">
        <div className="facility">
          <Typography.Title className="title">Dashboard</Typography.Title>
          <div className="container">
            <Card className="card">
              <Meta className="meta" title="WELCOME!" />
              <Typography.Paragraph className="Paragraph">
                -
              </Typography.Paragraph>
              <Link to="/Updateprofile" className="link">
                Update Profile
              </Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Add Products" />
              <Typography.Paragraph className="Paragraph">
                {product}
              </Typography.Paragraph>
              <Link to="/product" className="link">
                See Products
              </Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Orders" />
<<<<<<< HEAD
              <Typography.Paragraph className="Paragraph">
                -
              </Typography.Paragraph>
              <Link to="/orders" className="link">
                See Orders
              </Link>
=======
              <Typography.Paragraph className="Paragraph">{order}</Typography.Paragraph>
              <Link to="/orders" className="link">See Orders</Link>
>>>>>>> 55ac95e789a12b7703d30b790fa977468e6ab99a
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Admins" />
              <Typography.Paragraph className="Paragraph">
                -
              </Typography.Paragraph>
              <Link to="/Totaladmin" className="link">
                See Admins
              </Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Total Users" />
              <Typography.Paragraph className="Paragraph">
                {user}
              </Typography.Paragraph>
              <Link to="/User" className="link">
                See Users
              </Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="User Messages" />
              <Typography.Paragraph className="Paragraph">
                {message}
              </Typography.Paragraph>
              <Link to="/Message" className="link">
                See Messages
              </Link>
            </Card>
<<<<<<< HEAD
            <Card className="card">
              <Meta className="meta" title="Pending Orders" />
              <Typography.Paragraph className="Paragraph">
                -
              </Typography.Paragraph>
              <Link className="link">See Orders</Link>
            </Card>
            <Card className="card">
              <Meta className="meta" title="Compalted Orders" />
              <Typography.Paragraph className="Paragraph">
                -
              </Typography.Paragraph>
              <Link className="link">See Orders</Link>
            </Card>
=======
>>>>>>> 55ac95e789a12b7703d30b790fa977468e6ab99a
          </div>
        </div>
      </div>
    </>
  );
};

export default Deshboard;
