import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import Errorpage from "./components/Errorpage";
import Fans from "./components/Marketplace";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import IndivFans from "./components/Singlemarketplace";
import Checkout from "./components/Checkout";
import Users from "./components/Users";
import AdminFans from './components/adminPanel'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "Errorpage",
        element: <Errorpage />,
      },
      {
        path: "Fans",
        element: <Fans />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Fans/:productId",
        element: <IndivFans />,
      },
      {
        path: "Checkout",
        element: <Checkout />,
      },
      {
        path: "Users",
        element: <Users />,
      },
      {
        path: "adminpanel",
        element: <AdminFans />,
      },
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("App")
);
