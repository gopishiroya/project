
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

// --------
import  Deshboard  from './Admin/Deshboard/Deshboard';
import Product from './Admin/Product/Product';
import TotalAdmin from './Admin/TotalAdmin/TotalAdmin';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contect' element={<Contect />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* -------- */}
        <Route path='/deshboard' element={<Deshboard />} />
        <Route path='/product' element={<Product />} />
        <Route path='/Totaladmin' element={<TotalAdmin/>}/>

      </Routes>
    </div>
  );
}

export default App;
