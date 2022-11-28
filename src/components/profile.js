import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";

const Profile = () => {
  const [personalProfile, setPersonalProfile] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { devHost, profile } = routes;

  function logOut(event) {
    localStorage.removeItem("token");
    navigate("/");
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
    if (localStorage.getItem("token")) {
      async function fetchProfileData() {
        try {
          const response = await fetch(`${devHost}${profile}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const data = await response.json();
          console.log("This is the profile data: ", data);
          setPersonalProfile(data);
        } catch (error) {
          console.log(error);
          navigate("/profile");
        }
      }
      fetchProfileData();
    }
  }, []);

  return (
    <div>
      <div>
        <h2>Your Profile</h2>
        <button variant="contained" onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
