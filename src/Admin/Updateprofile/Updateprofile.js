import React from 'react'
import Header from "../Header/Header";
import { Form, Typography, Input, Button } from 'antd'
import './Updateprofile.scss'
import { Link } from 'react-router-dom'

const Updateprofile = () => {
  return (
    <>
    <div><Header/></div>
    <div className="adminupdate">
        <Form className="Form1">
          <Typography.Title className="updatetitle">UPDATE PROFILE</Typography.Title>
          <div className="Inputfield">
            <Input
              className="Input"
              type="text"
              placeholder="Enter your user name"
            />  
            <Input.Password
              className="Input"
              type="text"
              placeholder="Enter your old password"
            />
            <Input.Password
              className="Input"
              type="text"
              placeholder="Enter your new password"
            />
            <Input.Password
              className="Input"
              type="text"
              placeholder="Confirm your new password"
            />
            <div className="updateNow">
            <Button className='unow'>Update Now</Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Updateprofile