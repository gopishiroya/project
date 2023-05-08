import React from "react";
import { Route, Routes } from "react-router-dom";

// user
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Contect from "./Components/Contect/Contect";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

// admin
import Deshboard from "./Admin/Deshboard/Deshboard";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <div>
      <Routes>

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
      </Routes>
    </div>
  );
}

export default App;
