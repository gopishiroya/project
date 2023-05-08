import React from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';

import { Deshboard } from './Admin/Deshboard/Deshboard';
import Menu from './Components/Menu/Menu';

import Contect from './Components/Contect/Contect';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>

        <Route path='/menu' element={<Menu />}/>
        <Route path='/deshboard' element={<Deshboard />} />

        <Route path='/menu' element={<Menu />}/>
        <Route path='/contect' element={<Contect />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
