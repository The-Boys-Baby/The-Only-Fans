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
        <form onSubmit={registerHandler}>
          <div>Register</div>
          <div>Username: </div>
          <input
            type="text"
            value={username}
            onChange={changeUsername}
            className="registerUser"
          ></input>
          <div>Password: </div>
          <input
            type="password"
            value={password}
            onChange={changePassword}
            className="registerPass"
          ></input>
          <div>First Name: </div>
          <input
            type="text"
            value={firstName}
            onChange={changeFirstName}
            className="registerUser"
          ></input>
          <div>Last Name: </div>
          <input
            type="text"
            value={lastName}
            onChange={changeLastName}
            className="registerPass"
          ></input>
          <div>Email: </div>
          <input
            type="email"
            value={email}
            onChange={changeEmail}
            className="registerUser"
          ></input>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
