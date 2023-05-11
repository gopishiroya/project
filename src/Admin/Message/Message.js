import React from "react";
import Header from "../Header/Header";
import "./Message.scss";
import { Typography, Card, Button } from "antd";
const { Meta } = Card;

const Message = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="messagebody">
        <Typography.Title className="title">Messages</Typography.Title>
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
        </div>
      </div>
    </>
  );
};

export default Message;
