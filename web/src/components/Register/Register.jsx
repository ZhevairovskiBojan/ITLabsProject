import React, { useState } from "react";

function Register() {
  const initData = {
    email: "",
    password: "",
    name: "",
  };

  const [data, setData] = useState(initData);

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    try {
      let res = await fetch('/api/v1/auth/create-account', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        alert('User is created');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>
        <span>Email</span>
        <br />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={dataChange}
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
        ></input>
        <br />
      </label>
      <br />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
