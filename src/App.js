import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
     const [user, setUser] = useState({});
    const contextObject = {
        adminState: [isAdmin, setIsAdmin], 
        userState: [user, setUser]
    }
    return (
        <div>
            <Navbar context={contextObject} />
            <Outlet context={contextObject} />
        </div>
    )
}


export default App