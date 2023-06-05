import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Message.scss";
import { Typography, Card, Button } from "antd";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../Firebase/FIrebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { contectGetData } from "../../Action/Action";

const Message = () => {

  const dispatch = useDispatch();
  const contect = useSelector((state) => state.user.contect);

  useEffect(() => {
    dispatch(contectGetData());
  });

  const handleDelete = async (data) => {
    await deleteDoc(doc(firestore, "contect", data.id));
    toast.success("delete successfully");
  };

  return (
    <>
      <div>
        <Header />
        <ToastContainer />
      </div>
      <div className="messagebody">
        <Typography.Title className="title">Messages</Typography.Title>
        <div className="container">
          {
            contect.map((data, id) => {
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
