import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import routes from "../routes";

const Fans = () => {
  console.log("Fans should display");
  const { devHost, marketplace } = routes;
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
  } = useOutletContext();
  console.log(routes);

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
      <div className="productsBox">
        {fans &&
          !!fans.length &&
          fans.map((fan, idx) => {
            return (
              <div className="key" key={idx}>
                <div className="productBox">
                  <div className="image">
                    <img className="fanPics" src={fan.pictures} alt={fan.name} />
                  </div>
                  <div className="descriptions">
                    <h2>{fan.name}</h2>
                    <p>${fan.price}</p>
                    <p>{fan.description}</p>
                    <Link to={`/fans/${fan.id}`}>Go to products</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Fans;
