import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//export default () => {}
const ProfilePage = () => {
    const [personalProfile, setPersonalProfile] = useState([]);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();




    useEffect(() => {
        if(localStorage.getItem("token")) {
            async function fetchProfileData() {
                try {
                    if (!localStorage.getItem("token")) {
                        navigate('/login')
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
                    setPersonalProfile(data)
                } catch (error) {
                    console.log(error)
                    navigate('/profile')
                }
            }
            fetchProfileData()

            function logOut(event) {
                localStorage.removeItem("token")
                navigate("/")
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