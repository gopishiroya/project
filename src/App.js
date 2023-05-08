import React from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import { Deshboard } from './Admin/Deshboard/Deshboard';
// import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        {/* <Route path='/menu' element={<Menu />}/> */}
        <Route path='/deshboard' element={<Deshboard />} />
      </Routes>
    </div>
  );
}

export default App;
