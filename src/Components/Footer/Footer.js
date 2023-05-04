import { Card, Typography, Image } from 'antd'
import React, { useState } from 'react';
import email from '../Image/email-icon.png'
import clock from '../Image/clock-icon.png'
import map from '../Image/map-icon.png'
import phone from '../Image/phone-icon.png'
import './Footer.scss'

const { Meta } = Card;

const Footer = () => {

    const [preview, setPreview] = useState(false);

  return (
    <div className='footer'>
        <div className="container">
        <Card className='card'>
            <Image src={email} className='image' preview={preview}></Image>
            <Meta className='meta' title="Our Email" description="yumyumcafe@gmail.com" />
        </Card>
        <Card className='card'>
            <Image src={clock} className='image' preview={preview}></Image>
            <Meta className='meta' title="Opening Hours" description="07:00am to 10:00pm" />
        </Card>
        <Card className='card'>
            <Image src={map} className='image' preview={preview} ></Image>
            <Meta className='meta' title="Our Address" description="Surat, india - 395010" />
        </Card>
        <Card className='card'>
            <Image src={phone} className='image' preview={preview}></Image>
            <Meta className='meta' title="Our Number" description="123-456-7890" />
        </Card>
        </div>
        <Typography.Title className='title'>&copy; Copyright @ 2023 By Yum-Yum 😋 | All Rights Reserved!</Typography.Title>
    </div>
  )
}

export default Footer
