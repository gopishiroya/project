import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Profile.scss";
import {
  UserOutlined,
  UserAddOutlined,
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <Header />
      </div>
      <div className="border">
        <UserOutlined className="useroutlined" />
        <div className="Pname">
          <UserAddOutlined className="UserAddOutlined" />
          <Typography.Paragraph className="ProfileName">
            gopi
          </Typography.Paragraph>
        </div>
        <div className="Pphone">
          <PhoneFilled className="phonefilled" />
          <Typography.Paragraph className="ProfilePhone">
            9638520147
          </Typography.Paragraph>
        </div>
        <div className="Pmail">
          <MailFilled className="mailfilled" />
          <Typography.Paragraph className="ProfileMail">
            gopi@gmail.com
          </Typography.Paragraph>
        </div>
        <div className="ProfileLink">
          <Link className="updateProfileInfo">Update info</Link>
        </div>
        <div className="Map">
          <EnvironmentFilled className="environmentfilled" />
          <Typography.Paragraph className="ProfileAddress">
            svfbfdj
          </Typography.Paragraph>
        </div>
        <div className="ProfileUpdateAddress">
          <Link className="PupdateAddress">Update Address</Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>    
    </div>
  );
};

export default Profile;
