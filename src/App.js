import Navbar from './components/Navbar';
import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import  Home  from './components/pages/Home';
import About from './components/pages/About';
import Sign from './components/pages/Sign';


function App() {
 
  
  return (   

    <div className="main">
      <Navbar/>
          <Routes>
             <Route path="/Home" element={<Home/>}/>
             <Route path="/Signup/Login" element={<Sign/>}/>
             <Route path="/About" element={<About/>}/>
             <Route path="*" element={<Home/>}/>
          </Routes>
    </div>
  )
 
}

export default App;
