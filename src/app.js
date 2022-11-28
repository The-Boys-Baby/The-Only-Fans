import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from './components/Navbar';

// jeremy: this is a good spot for a Navbar.
// From here you can do two things, make an admin, user, and guest version of Navbar
// (or pass it in as props to do the check inside the Navbar component),
// or check if they're a user, and pass it into the outlet, along with context.

 const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Outlet />
        </div>
    )
}


export default App