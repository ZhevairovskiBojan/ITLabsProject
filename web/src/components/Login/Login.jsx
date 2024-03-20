import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import logo from "../../imgs/logo.png";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const dataChange = (e) => {
    setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const login = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("token", resData.token);
        localStorage.setItem("username", resData.username);
        navigate("/dashboard");
      } else {
        alert(resData.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const registration = () => navigate("/register");

  return (
    <div className={styles.login_module}>
      <div className={styles.card_login}>
        <h2 className={styles.h2_login}>Login Form</h2>
        <label className={styles.label_login}>
          <span>Email</span>
          <input 
            className={styles.input_login}
            type="email"
            name="email"
            value={data.email}
            onChange={dataChange}
          />
        </label>
        <label className={styles.label_login}>
        <br />
          <span>Password</span>
          <input
            className={styles.input_login}
            type="password"
            name="password"
            value={data.password}
            onChange={dataChange}
          />
        </label> <br />
        <button className={styles.button_login} onClick={registration}>Register</button> <br />
        <br />
        <button className={styles.button_login} onClick={login}>Login</button> <br />
        <br />
      </div>

      <div className={styles.app_logoLogin}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Login;
