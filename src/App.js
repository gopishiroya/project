<<<<<<< HEAD
import React from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Contect from './Components/Contect/Contect';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// --------
import  Deshboard  from './Admin/Deshboard/Deshboard';
import Product from './Admin/Product/Product';
=======
import React from "react";
import { Route, Routes } from "react-router-dom";

// user
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Contect from "./Components/Contect/Contect";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
>>>>>>> 4a3cc7db300c5f52b9c41a8c5aa9282a916c67e8

// admin
import Deshboard from "./Admin/Deshboard/Deshboard";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contect' element={<Contect />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />} />
        {/* -------- */}
        <Route path='/deshboard' element={<Deshboard />} />
        <Route path='/product' element={<Product />} />
=======

        {/* user */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* admin */}
        <Route path="/deshboard" element={<Deshboard />} />
>>>>>>> 4a3cc7db300c5f52b9c41a8c5aa9282a916c67e8
      </Routes>
    </div>
  );
}

export default App;
