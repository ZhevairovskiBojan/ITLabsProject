import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import logo from "../../imgs/logo.png";


function Login() {
  
  const initData = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initData);

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

 
  const login = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email or password");
      return;
    }
    try {
      let res = await fetch("/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      let Obj = await res.json();
      if (res.ok) {
        setLoggedIn(true);
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("token", Obj.token);
        localStorage.setItem("username", Obj.username);
        navigate("/dashboard");
      }
      alert(Obj.status);
    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  
  // const logout = () => {
  //   setLoggedIn(false);
  //   localStorage.setItem("loggedIn", "false");
  //   localStorage.removeItem("token");
  //  };

  const registration = () => {
    navigate("/register");
  };

  return (
  <div className={styles.loginModule}>
    <div className={styles.card}>
   <h2>Login Form</h2>
  <label>
  <span>Email</span>
     <br />
  <input
     type="email"
     name="email"
     value={data.email}
     onChange={dataChange}
  />
  </label>
  <div>
    <br />
  <label>
  <span>Password</span>
    <br />
  <input
    type="password"
    name="password"
    value={data.password}
    onChange={dataChange}
  />
  </label>
    <br />
  <button onClick={registration}>Register</button> <br />
    <br />
  <button onClick={login}>Login</button>
  </div>
  </div>

   <div className={styles["app-logo"]}>
          <img src={logo} alt="logo" />
   </div>
     
    
  </div>
  );
}

export default Login;
