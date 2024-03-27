import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Usericon from "../../imgs/User.png";

export const Header = () => {
    const location = useLocation();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('username');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    const getPageTitle = (pathname) => {
        switch (pathname) {
            case '/':
                return 'Dashboard';
            case '/dashboard':
                return 'Dashboard';
            case '/inventory':
                return 'Inventory';
            case '/reports':
                return 'Reports';
            case '/suppliers':
                return 'Suppliers';
            case '/reports/activityhistory':
                return 'Reports > Activity History';
            case '/reports/inventorysummary':
                return 'Reports > Inventory Summary';
            default:
                return '';
        }
    };

    const isDashboard = getPageTitle(location.pathname) === 'Dashboard';

    return (
        <div className={styles.topsection}>
            <div className={styles.headerwrapper}>
                <p className={styles.leftheading}>{getPageTitle(location.pathname)}</p>
                {isDashboard && userName && (
                    <div>
                        <p className={styles.rightheading}>Welcome back {userName} <img src={Usericon} alt="user_icon" /></p>
                    </div>
                )}
                <div className={styles.border}></div>
            </div>
        </div>
    );
};
