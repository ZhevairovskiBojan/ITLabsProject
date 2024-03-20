import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
// import { useTheme } from "../ThemeContext/ThemeContext";
// import DarkIcon from "../../imgs/darkmode.png"; 
import Logo from "../../imgs/logo.png";
import DashboardIcon from "../../imgs/dashboard_icon.png";
import ProductIcon from "../../imgs/inventory_icon.png";
import ComboChartIcon from "../../imgs/reports_icon.png";
import ShutdownIcon from "../../imgs/signout_icon.png";

export const Navbar = () => {
    const navigate = useNavigate();
    // const { theme, toggleTheme } = useTheme(); 
    
    // const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

    const handleSignOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.setItem("loggedIn", "false");

        navigate("/login");
    };

    return (
        <>
            {/* <nav className={`${styles.navbar} ${themeClass}`}> Apply themeClass to navbar */}
            <nav className={styles.navbar}>
                <Link to="/"><img src={Logo} className={styles.logo} alt="logo" /></Link>
                <div className={styles.navmenu}>
                    <Link to="/dashboard" className={styles.navbar_link}><img src={DashboardIcon} alt="dashboard" /> Dashboard</Link>
                    <Link to="/inventory" className={styles.navbar_link}><img src={ProductIcon} alt="inventory" /> Inventory</Link>
                    <Link to="/reports" className={styles.navbar_link}><img src={ComboChartIcon} alt="report" /> Reports</Link>
                    <Link to="/suppliers" className={styles.navbar_link}>Suppliers</Link>
                    
                    {/* <button onClick={toggleTheme} className={styles.themeToggle}>
                        <img src={DarkIcon} alt="Toggle Dark Mode" />
                    </button> */}
                </div>
                <div className={styles.signout_wrap}>
                    <button className={styles.btn_signout} onClick={handleSignOut}>
                        <img src={ShutdownIcon} alt="signout" /> Sign Out
                    </button>
                </div>
            </nav>
        </>
    );
};
