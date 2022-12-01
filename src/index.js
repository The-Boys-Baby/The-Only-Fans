import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Homepage from "./components/homepage";
import Errorpage from "./components/errorpage";
import Fans from "./components/marketplace";
import Profile from "./components/profile";
import Register from "./components/register";
import Login from "./components/login";
// import Homepage from './components/homepage';
// import Errorpage from './components/errorpage';
// import Fans from "./components/marketplace";
// import Profile from './components/profile';
// import Register from './components/register';
// import Login from './components/login';

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
