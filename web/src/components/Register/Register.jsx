import React, { useState } from "react";
import styles from "./Register.module.css";
import logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const initData = {
    email: "",
    password: "",
    name: "",
  };

  const [data, setData] = useState(initData);
  const navigate = useNavigate();

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    if (!data.email || !data.password || !data.name) {
      alert("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please provide a valid email or password.");
      return;
    }

    if (data.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    try {
      console.log("Registering user:", data);

      let res = await fetch('/api/v1/auth/create-account', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Response:", res);

      if (res.ok) {
        alert('User is created');
        navigate("/login");
      } else {
        const errorData = await res.json();
        console.log("Error:", errorData);
      }
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  return (
    <div className={styles.registerModule}> 
      <div className={styles.card}>
        <h2>Register</h2>
        <label>
          <span>Email</span>
          <br />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={dataChange}
            className={styles.input} 
          ></input>
        </label>
        <br />
        <label>
          <span>Password</span>
          <br />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={dataChange}
            className={styles.input}
          ></input>
        </label>
        <br />
        <label>
          <span>Full Name</span>
          <br />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={dataChange}
            className={styles.input} 
          ></input>
          <br />
        </label>
        <br />
        <button onClick={register} className={styles.button}> 
          Register
        </button>
        <NavLink to={"/login"}>
        <div className={styles["app-logo"]}>
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      </div>
    </div>
  );
}

export default Register;