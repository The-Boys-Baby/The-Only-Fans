import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import Homepage from './homepage'
import Errorpage from './components/errorpage';
import Fans from './components/marketplace';
import ProfilePage from './components/profile';



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
            {
                path: 'Errorpage',
                element: <Errorpage />
            },
            {
                path: 'Fans',
                element: <Fans />
            },
            {
                path: 'ProfilePage',
                element: <ProfilePage />
            }
        ]
    }
])



ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("App")
);