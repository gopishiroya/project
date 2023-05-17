import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Message.scss";
import { Typography, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { contectGetDataInitaiate } from "../../Action/Action";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/FIrebase";
const { Meta } = Card;

const Message = () => {
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const postCollectionRef = collection(firestore, "contect");

  useEffect(() => {
    const getDocuments = async () => {
      const result = await getDocs(postCollectionRef);
      setData(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDocuments();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="messagebody">
        <Typography.Title className="title">Messages</Typography.Title>
        {data.map((data) => {
          return (
            <Typography.Title>
              {data.name}
              {data.number}
            </Typography.Title>
          );
        })}
        <div className="container">
          <Card className="msgcard">
            <div className="msgcardrow">
              <Meta className="meta" description="User Name : ekta" />
              <Meta className="meta" description="Number : 1234567890" />
              <Meta className="meta" description="Email : ekta@email.com" />
              <Meta
                className="meta"
                description="Message : Hey i amjsxjsanxnanmlkmkn m,niknk mkkksxd"
              />
              <Button className="msgcardbtn">Delete</Button>
            </div>
          </Card>
          {/* <Card className="msgcard">
            <div className="msgcardrow">
              <Meta className="meta" description="User Name : ekta" />
              <Meta className="meta" description="Number : 1234567890" />
              <Meta className="meta" description="Email : ekta@email.com" />
              <Meta
                className="meta"
                description="Message : Hey i amjsxjsanxnanmlkmkn m,niknk mkkksxd"
              />
              <Button className="msgcardbtn">Delete</Button>
            </div>
          </Card>
          <Card className="msgcard">
            <div className="msgcardrow">
              <Meta className="meta" description="User Name : ekta" />
              <Meta className="meta" description="Number : 1234567890" />
              <Meta className="meta" description="Email : ekta@email.com" />
              <Meta
                className="meta"
                description="Message : Hey i amjsxjsanxnanmlkmkn m,niknk mkkksxd"
              />
              <Button className="msgcardbtn">Delete</Button>
            </div>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default Message;
