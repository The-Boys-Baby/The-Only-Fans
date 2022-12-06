import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes";
const App = () => {
  const { devHost, marketplace } = routes;
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [fans, setFans] = useState();
  const contextObject = {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
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
        console.log(data);
        setFans(data);
      } catch (error) {
        console.log(error);
      }
    }
    postHandler();
  }, []);
  return (
    <div>
      <Navbar context={contextObject} />
      <Outlet context={contextObject} />
    </div>
  );
};

export default App;
