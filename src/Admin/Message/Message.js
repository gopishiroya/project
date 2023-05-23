import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Message.scss";
import { Typography, Card, Button } from "antd";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/FIrebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
  const [data, setData] = useState([]);

  const postCollectionRef = collection(firestore, "contect");

  const handleDelete = async (data) => {
    await deleteDoc(doc(firestore, "contect", data.id));
    toast.success("delete successfully");
  };

  useEffect(() => {
    getDocuments();
  }, [handleDelete]);

  const getDocuments = async () => {
    const result = await getDocs(postCollectionRef);
    setData(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  return (
    <>
      <div>
        <ToastContainer />
        <Header />
      </div>
      <div className="messagebody">
        <Typography.Title className="title">Messages</Typography.Title>
        <div className="container">
          {data.map((data, id) => {
            return (
              <Card className="msgcard" key={id}>
                <div className="msgcardrow">
                  <Typography.Paragraph className="msgName">
                    Name : {data.name}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="msgName">
                    Number : {data.number}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="msgName">
                    Email : {data.email}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="msgName">
                    Message : {data.message}
                  </Typography.Paragraph>
                  <Button
                    className="msgcardbtn"
                    onClick={() => handleDelete(data)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Message;
