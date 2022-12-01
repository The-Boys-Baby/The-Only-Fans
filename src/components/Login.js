import React, { useState, useEffect } from "react";

const Login = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  async function loginFunc(event) {
    event.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: username,
          },
        }),
      });

      const data = await response.json();
      localStorage.setItem("token", data.data.token);
      console.log(data.data.token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="loginBoxBox">
      <div className="loginInput">
        <form onSubmit={loginFunc}>
          <div className="usernameInput">Username: </div>
          <input
            required
            type="text"
            value={username}
            onChange={changeUsername}
            className="registerUser"
          ></input>
          <div className="passwordInput">Password: </div>
          <input
            type="password"
            value={password}
            onChange={changePassword}
            className="registerPass"
          ></input>
          <button className="submitButton" type="submit">
            {" "}
          </button>
        </form>
        <h3> Don't have an account?</h3>
        <button className="registerButton"></button>
      </div>
    </div>
  );
};

export default Login;