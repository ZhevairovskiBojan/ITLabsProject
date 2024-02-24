import styles from "./navigation.module.css";
import logo from "../../imgs/logo.png";
import dashboard_icon from "../../imgs/dashboard_icon.png";
import inventory_icon from "../../imgs/inventory_icon.png";
import reports_icon from "../../imgs/reports_icon.png";
import signout_icon from "../../imgs/signout_icon.png";
import { NavLink } from "react-router-dom";


export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles["app-logo"]}>
        <NavLink to="/dashboard">
        <img src={logo} alt="logo" />
        </NavLink>
    </div>
      <div className={styles["nav-wrapper"]}>
        <NavLink to="/dashboard" className={styles["nav-button"]}>
          <img src={dashboard_icon} className={styles["img-btn"]} alt="Dashboard_icon" />
          <span className={styles["txt-btn"]}>Dashboard</span>
        </NavLink>
        <NavLink to="/inventory" className={styles["nav-button"]}>
          <img src={inventory_icon} className={styles["img-btn"]} alt="inventory_icon" />
          <span className={styles["txt-btn"]}>Inventory</span>
        </NavLink>
        <NavLink to="/reports" className={styles["nav-button"]}>
          <img src={reports_icon} className={styles["img-btn"]} alt="reports_icon" />
          <span className={styles["txt-btn"]}>Reports</span>
        </NavLink>
        <NavLink to="/suppliers" className={styles["nav-button"]}>
          <span className={styles["txt-btn"]}>Suppliers</span>
        </NavLink>
      </div>
      <div className={styles["signout-btn"]}>
        <NavLink to="/login" className={styles["nav-button"]}>
          <img src={signout_icon} className={styles["img-btn"]} alt="signout_icon" />
          <span className={styles["txt-btn"]}>SignOut</span>
        </NavLink>
      </div>
    </div>
  );
};


