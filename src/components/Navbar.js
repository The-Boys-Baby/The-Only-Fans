import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OFlogo from "../Images/OF.png";

const Navbar = ({ context }) => {
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
  } = context;
  return (
    <div>
      <div>
        <div className="headerBox">
          <Link to="/">
            <img src={OFlogo} />
          </Link>
        </div>
        <div className="navBox">
          <nav>
            <Link id="homenav" className="navItem" to="/">
              {"  "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>{" "}
              <span className="navtext">Home</span>
            </Link>
            {!user?.id ? (
              <div className="headerBox">
                <Link id="homenav" className="navItem" to="/Register">
                  {"  "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"></path>
                    <path d="M16 4h2a2 2 0 0 1 1.73 1"></path>
                    <path d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"></path>
                    <path d="M8 18h1"></path>
                  </svg>
                  <span className="navtext">Register</span>
                </Link>
                <Link id="homenav" className="navItem" to="Login">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>{" "}
                  <span className="navtext">Login</span>
                </Link>
              </div>
            ) : null}
            <Link id="homenav" className="navItem" to="Profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path>
                <path d="M12 12v.01"></path>
              </svg>
              <span className="navtext">Profile</span>
            </Link>
            <Link id="homenav" className="navItem" to="Fans">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>{" "}
              <span className="navtext">Shop</span>
            </Link>
            {isAdmin && (
              <Link id="homenav" className="navItem" to="/adminpanel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
                <span className="navtext">Admin Panel</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
