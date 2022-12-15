import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes";
const App = () => {
  const { devHost, marketplace } = routes;
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [fans, setFans] = useState([]);
  const [cart, setCart] = useState({});
  const contextObject = {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
    cartState: [cart, setCart]
  };
  useEffect(() => {
    async function postHandler() {
      try {
        const response = await fetch(`${devHost}${marketplace}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        // console.log(data);
        setFans(data);
      } catch (error) {
        console.log(error);
      }
    }
    async function cart() {
      try {
        const response = await fetch(`${devHost}checkout/me`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    async function checkUser() {
      try {
        const response = await fetch(`${devHost}users/me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: localStorage.getItem("token"),
          }),
        });
        const data = await response.json();
        if(data){
        setUser(data.user);
        setIsAdmin(data.user.isadmin);
        }
      } catch (error) {
        console.log(error);
      }
    }
    cart()
    postHandler();
    checkUser()
  }, []);

  return (
    <div>
      <Navbar context={contextObject} />
      <Outlet context={contextObject} />
    </div>
  );
};

export default App;
