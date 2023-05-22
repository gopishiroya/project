import React, { useEffect, useState }  from "react";
import Header from "../Header/Header";
import { Typography, Card, Button } from "antd";
import "./User.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/FIrebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {

  const [data, setData] = useState([]);

  const postCollectionRef = collection(firestore, "user");

  const handleDelete = async (data) => {
    await deleteDoc(doc(firestore, "user", data.id));
    toast.success("delete successfully");
  };

  useEffect(() => {
    getDocuments();
  }, [handleDelete]);

  const getDocuments = async () => {
    const result = await getDocs(postCollectionRef);
    setData(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(data)
  return (
    <>
      <div>
        <ToastContainer/>
        <Header />
      </div>
      <div className="userbody">
        <Typography.Title className="title">Users Account</Typography.Title>
        <div className="container">
        {data.map((data, id) => {
            return (
              <Card className="usercard" key={id}>
              <div className="usercardrow">
              <Typography.Paragraph className="meta">
                    User ID : {id+1}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="meta">
                    User Email : {data.email}
                  </Typography.Paragraph>
                <Button className="usercardbtn"
                 onClick={() => handleDelete(data)}>
                  Delete</Button>
              </div>
            </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default User;
