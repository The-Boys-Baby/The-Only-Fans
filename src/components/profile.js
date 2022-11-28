import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// jeremy: export default () => {}
const ProfilePage = () => {
    const [personalProfile, setPersonalProfile] = useState([]);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();



    // jeremy: you'll probably already want to have the user, so you can do things on the navbar and other parts of the app. Are you sure you want it to be LOCAL state instead of GLOBAL state?
    
    useEffect(() => {
        if(localStorage.getItem("token")) {
            async function fetchProfileData() {
                try {
                    if (!localStorage.getItem("token")) {
                        navigate('/login') // jeremy: nice redirect
                    }
                    const response = await fetch(
                        {/* API Link Goes Here */}, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem("token")}`
                            }
                        }
                    );
                    const data = await response.json();
                    console.log("This is the profile data: ", data)
                    setPersonalProfile(data) //jeremy: good start, you'll have to double check what is being passed in here when you get your fetch done. That includes the message and name of the object you receive, not just the data, if there's an error finding that user on your server.
                } catch (error) {
                    console.log(error)
                    navigate('/profile')
                }
            }
            fetchProfileData()

            function logOut(event) {
                localStorage.removeItem("token")
                navigate("/") // jeremy: nice logout definition, but where are you using it? Why is it defined here?
            }
        }
    }, [])

    return (
        <div>
            <div>
                <h2>Your Profile</h2>
                <button variant="contained" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}

export default ProfilePage;