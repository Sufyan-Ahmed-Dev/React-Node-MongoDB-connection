import React from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Servies from './components/Servies';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Servies />} />
        <Route path='/login' element={<Login />} />

      </Routes>

    </>
  );
}

export default App;
