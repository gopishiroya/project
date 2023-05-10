import React from 'react'
import Header from '../Header/Header'
import { Form, Typography, Input,Card} from "antd";
import './TotalAdmin.scss'
import { Link } from 'react-router-dom';
const { Meta } = Card;

const TotalAdmin = () => {
  return (
    <>
    <div><Header/></div>

    <div className="body">
    <Typography.Title className="title">
           Admins Account
          </Typography.Title>
        <div className="container">
        <Card className="maincard">
             
              <div className="row">
              <Meta className="meta" title= "Register New Admin"/>
              </div>
              <div className="linkrow">
                <Link className="link1">Update</Link>
                <Link className="link2">Delete</Link>
              </div>
              
            </Card>
            <Card className="subcard">
             
             <div className="row">
             <Meta className="meta" title= "Register New Admin"description="Drinks"/>
             </div>
             <div className="linkrow">
               <Link className="link1">Update</Link>
               <Link className="link2">Delete</Link>
             </div>
             
           </Card>
        </div>
    </div>
    </>
  )
}

export default TotalAdmin