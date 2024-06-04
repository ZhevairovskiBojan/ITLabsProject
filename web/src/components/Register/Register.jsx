import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import styles from "./Register.module.css";
import logo from "../../imgs/logo.png";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { email, password, name } = formData; 
    if (!email || !password || !name) {
      alert("Please fill in all fields.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please provide a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    
    try {
      const response = await fetch('/api/v1/auth/create-account', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const resData = await response.json();

      if (response.ok) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("token", resData.token);
        localStorage.setItem("username", formData.name);
        navigate("/dashboard");
      } else {
        alert(`Registration failed: ${resData.message}`);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.registerModule}> 
      <div className={styles.cardRegister}>
        <h2>Register</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <div className={styles.fieldRegister}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.inputRegister} 
            />
          </div>
          
          <div className={styles.fieldRegister}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={styles.inputRegister}
            />
          </div>

          <div className={styles.fieldRegister}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.inputRegister} 
            />
          </div>
          <br />

          <button type="submit" className={styles.buttonRegister}>Register</button>
        </form>

        <NavLink to={"/login"} className={styles.logoLinkRegister}>
          <img src={logo} alt="logo" className={styles.logoRegister} />
        </NavLink>
      </div>
    </div>
  );
}

export default Register;
