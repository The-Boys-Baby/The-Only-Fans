import React, { useState, useEffect } from 'react';
import routes from '../routes';
import { Link } from 'react-router-dom';

const Users = () => {
    console.log("This should show users");
    const [allUsers, setAllUsers] = useState();
    const [admin, setAdmin] = useState(true);
    const { devHost, users } = routes;
    console.log(routes);
    

    useEffect(() => {
        async function userHandler() {
            try {
                const response = await fetch(`${devHost}${users}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                });
                const data = await response.json();
                console.log(data.users);
                setAllUsers(data.users);
            } catch (error) {
                console.log(error);
            }
        }
        userHandler();
    }, []);
    return (
        <div>
            <div className='userStuff'>
                <button><Link to="/Homepage">Go Home</Link></button>
                {
                    allUsers && !!allUsers.length && allUsers.map((user, idx) => {
                        return (
                            <div>                                
                                <div key={idx}>
                                    <h2>{user.id}. {user.username}</h2>
                                    <p></p>
                                    <p>{user.firstname}</p>
                                    <p>{user.email}</p>
                                    <p>{user.isadmin === true ? "true" : "false"}</p>
                                    <div>{user.isadmin === true ? <button className="adminButton" onClick={{}}>Demote</button> : <button className="adminButton" onClick={{}}>Promote</button>}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Users;