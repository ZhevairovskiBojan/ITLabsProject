import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  const [location, setLocation] = useState('login');

  const locationChange = (e) => {
    setLocation(e.target.dataset.target);
  };
  return (
    <div className="App">

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
      </div>
     
    </div>
  );
}

export default App;
