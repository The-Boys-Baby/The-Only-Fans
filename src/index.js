import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import Homepage from './homepage'
//other file imports go here


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
        ]
    }
])



ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("App")
);