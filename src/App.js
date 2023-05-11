
import React from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Contect from './Components/Contect/Contect';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Update_profile from "./Components/Update Profile/UpdateProfile";
import UpdateAddress from "./Components/Update address/UpdateAddress";
import Category from "./Components/Category/Category";
import Profile from './Components/Profile/Profile';
// --------
import  Deshboard  from './Admin/Deshboard/Deshboard';
import Product from './Admin/Product/Product';
import TotalAdmin from './Admin/TotalAdmin/TotalAdmin';
import User from './Admin/User/User';
import Message from './Admin/Message/Message';
import Updateprofile from './Admin/Updateprofile/Updateprofile';


function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contect' element={<Contect />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/update_profile" element={<Update_profile />} />
        <Route path="/update_address" element={<UpdateAddress />} />
        <Route path="/category" element={<Category />} />
        <Route path='profile' element={<Profile />} />

        {/* -------- */}
        <Route path='/deshboard' element={<Deshboard />} />
        <Route path='/product' element={<Product />} />
        <Route path='/Totaladmin' element={<TotalAdmin/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Message' element={<Message/>}/>
        <Route path='/Updateprofile' element={<Updateprofile/>}/>

      </Routes>
    </div>
  );
}

export default App;
