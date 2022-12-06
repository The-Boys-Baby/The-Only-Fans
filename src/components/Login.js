import React, { useState, useEffect } from "react";
import routes from "../routes";
import {useNavigate} from "react-router-dom"
const adminPrivledges = adminPanel
// if statement deifferentiating admins from users and making the admin panel available
const admin = () => {
const [isAdmin, setAdmin] = useState();
const [adminUsername, adminPassword] = useState();

async function adminLogin(event) {
  event.preventDefault
  try {
    const adminRecognition = await fetch(``)
    if (user == admin)
  } catch (error) {
    
  }
}

}

const Login = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const {devHost, login} = routes
  const navigate = useNavigate()
  async function loginFunc(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${devHost}${login}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
            username: username,
            password: password
          
        }),
      });

      const data = await response.json();
      localStorage.setItem("token", data.token);
      if(data.token){

      }
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
  const goTo = () => {
    navigate("/Register")
  }

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
        <button className="registerButton" onClick={goTo}></button>
      </div>
    </div>
  );
};

export default Login;
