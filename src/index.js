import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Homepage from "./components/Homepage";
import Errorpage from "./components/Errorpage";
import Fans from "./components/Marketplace";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";

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
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("App")
);
