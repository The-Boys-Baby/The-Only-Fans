import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';


const Fans = () => {
    console.log("Fans should display")
    const [fans, setFans] = useState([]);
    const {devHost, marketplace} = routes
    console.log(routes)


    useEffect(() => {
        async function postHandler() {
            
            try {
                const response = await fetch(
                    `${devHost}${marketplace}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                const data = await response.json();
                console.log(data)
                setFans(data);
            } catch (error) {
                console.log(error)
            }
        }
        postHandler();
    }, [])
    return (
        <div>
            <div>
                {
                    fans && !!fans.length && fans.map((fan, idx) => {
                        return (
                                <div key={idx}>
                                    <h2>{fan.name}</h2>
                                    <p>{fan.price}</p>
                                    <p>{fan.description}</p>
                                    <img src={fan.pictures} alt={fan.name}/>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Fans;