import React, { useEffect, useState } from "react";
import User from "../../imgs/User.png";
import styles from "./headerDashBoard.module.css"

export const HeaderDashBoard = () => {
 const [username, setUsername] = useState("");
  

 useEffect(() => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
      setUsername(storedUsername);
  }
}, []);
 

  return (
    <div className={styles["header-comp"]}>
      <h1>Dashboard</h1>
      <div className={styles["header-right"]}>
      {username && <h2 className={styles["welcome"]}>Welcome back {username}</h2>}
      <img className={styles["user-logo"]} src={User} alt="User-logo"/>
   </div>
    </div>
  )
}

export default HeaderDashBoard;
  