import React,{useEffect,useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Form, Typography, Input } from 'antd'
import { Link } from 'react-router-dom'
import './UpdateAddress.scss'
import { auth } from '../../Firebase/FIrebase'
import { useNavigate } from 'react-router-dom'

const UpdateAddress = () => {
  const navigate = useNavigate(null);

  function Getuserid() {
    const [uid, setuid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setuid(user.email);
        } else {
          navigate("/");
        }
      });
    }, []);
    return uid;
  }
  const uid = Getuserid();
  console.log(uid);

  return (
    <div className='updateaddress'>
      <div>
        <Header user={uid}/>
      </div>
      <div className="uForm">
        <Form className="uForm1">
          <Typography.Title className="updateaddresstitle">YOUR ADDRESS</Typography.Title>
          <div className="updateInputfield">
            <Input
              className="updateInput"
              type="text"
              placeholder="flat no."
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="building no."
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="area name"
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="city name"
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="state name"
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="country name"
            />
            <Input
              className="updateInput"
              type="text"
              placeholder="pin code"
            />
            <div className="updateaddressnow">
            <Link className='anow' to="/checkout">save address</Link>
            </div>
          </div>
        </Form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default UpdateAddress
