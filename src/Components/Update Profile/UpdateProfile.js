import React,{useEffect,useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Form, Typography, Input } from 'antd'
import './UpdatePofile.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase/FIrebase'
import { useNavigate } from 'react-router-dom'

const Update_profile = () => {
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

  return (
    <div className='update_profile'>
      <div>
        <Header user={uid}/>
      </div>
      <div className="Form">
        <Form className="Form1">
          <Typography.Title className="updatetitle">UPDATE PROFILE</Typography.Title>
          <div className="Inputfield">
            <Input
              className="Input"
              type="text"
              placeholder="Enter your user name"
            />
            <Input
              className="Input"
              type="email"
              placeholder="Enter your email"
            />
            <Input
              className="Input"
              type="tel"
              placeholder="Enter your phone number"
              maxLength={10}
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
            <Link className='unow' to="/checkout">Update Now</Link>
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

export default Update_profile
