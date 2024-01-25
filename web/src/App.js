
import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inventory from './Pages/InventoryPage/Inventory';
import Reports from './Pages/ReportsPage/Reports';
import Suppliers from './Pages/SuppliersPage/Suppliers';




function App() {
  const [location, setLocation] = useState('login');

  const locationChange = (e) => {
    setLocation(e.target.dataset.target);
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={main} /> */}
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='inventory' element={<Inventory />}/>
        <Route path='reports' element={<Reports/>}/>
        <Route path='suppliers' element={<Suppliers/>}/>

        
      </Routes>
      </BrowserRouter>
    
{/* 
  <nav>
    <button onClick={locationChange} data-target='login'>
    Log in
    </button>
    <button onClick={locationChange} data-target='register'>
    Register
    </button>
  </nav>

      <div>
        {location === 'login' ? <Login /> : null}
        {location === 'register' ? <Register /> : null}

        
      </div> */}
     
    </div>
  );
}

export default App;
