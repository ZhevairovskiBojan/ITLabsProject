import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";


function Login () {
    // kreirame inicijalna data
    const initData = {
        email: "",
        password: "",
};

// zacuvuvame podatoci vo state za da proveruvame dali sme logirani
const [data, setData] = useState(initData);

const navigate = useNavigate();

// state za proveruvanje dali sme logirani
const [loggedIn, setLoggedIn] = useState();

// funkcija za sledenje na promenite vo formata
const dataChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
};

// asinhrona funcija Login
const login = async () => {
    try{
        let res = await fetch('/api/v1/auth/login', {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        });
        let Obj = await res.json();
        if(res.ok) {
            setLoggedIn(true);
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('token', Obj.token);
            navigate("/inventory") // dashboard
        }
        alert(Obj.status);
    }   catch (err) {
        console.log(err);
    }
   };

   useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  

   const logout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('token');
   }

    
   return (
    <div>
        {loggedIn ? (
            <div>
                <button className={styles.logout} onClick={logout}>Logout</button>
            </div>
        ) : (
            <div className={styles.loginModule}>
                <div className={styles.card}>
                    <h2>Login Form</h2>
                    <label>
                        <span>Email</span>
                        <br />
                        <input type="email" name="email" value={data.email} onChange={dataChange}></input>
                    </label>
                    <div>
                        <br />
                        <label>
                            <span>Password</span>
                            <br />
                            <input type="password" name="password" value={data.password} onChange={dataChange}></input>
                        </label>
                        <br />
                        <button onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}

export default Login;