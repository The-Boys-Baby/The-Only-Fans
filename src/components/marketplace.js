import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Fans = () => {
    console.log("Fans should display")
    const [fans, setFans] = useState([]);

    useEffect(() => {
        async function postHandler() {
            
            try {
                const response = await fetch(
                    {/* API Link Goes Here */},
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
    }, [])
    return (
        <div>
            <div>
                <h2>This is the Fans page</h2>
            </div>
        </div>
    )
}



export default Fans;