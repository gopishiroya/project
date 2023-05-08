import React from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
<<<<<<< HEAD
import { Deshboard } from './Admin/Deshboard/Deshboard';
// import Menu from './Components/Menu/Menu';
=======
import Menu from './Components/Menu/Menu';
import Contect from './Components/Contect/Contect';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
>>>>>>> 6f0f1fe4de2373a965608a337116100a7a9f966f

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
<<<<<<< HEAD
        {/* <Route path='/menu' element={<Menu />}/> */}
        <Route path='/deshboard' element={<Deshboard />} />
=======
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contect' element={<Contect />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />} />
>>>>>>> 6f0f1fe4de2373a965608a337116100a7a9f966f
      </Routes>
    </div>
  );
}

export default App;
