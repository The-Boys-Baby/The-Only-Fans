import React, { useState } from "react";
import routes from "../routes";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const { devHost, register } = routes;
  async function registerHandler(event) {
    event.preventDefault();
    if ((password, username, firstName, lastName, email)) {
      try {
        const response = await fetch(`${devHost}${register}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            firstname: firstName,
            lastname: lastName,
            email: email,
          }),
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log(data);
        if (data.token) {
          navigate("/");
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("please input all fields");
    }
  }
  const changeUsername = (event) => {
    setUsername(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="registerBox">
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={registerHandler}>          
          <label>Username: 
          <input
            type="text"
            value={username}
            required
            minLength={8}
            onChange={changeUsername}
            className="registerUser"
            placeholder="New Username..."
          ></input></label>
          <label>Password: 
          <input
            type="password"
            value={password}
            required
            minLength={8}
            onChange={changePassword}
            className="registerPass"
            placeholder="New Password..."
          ></input></label>
          <label>First Name: 
          <input
            type="text"
            value={firstName}
            required
            onChange={changeFirstName}
            className="registerUser"
            placeholder="First Name..."
          ></input></label>
          <label>Last Name: 
          <input
            type="text"
            value={lastName}
            required
            onChange={changeLastName}
            className="registerPass"
            placeholder="Last Name..."
          ></input></label>
          <label>Email: 
          <input
            type="email"
            value={email}
            required
            onChange={changeEmail}
            className="registerUser"
            placeholder="Email..."
          ></input></label>
          <button className="registerButton" type="submit"></button>
        </form>
      </div>
    </div>
  );
};
export default Register;
