import React, { useState, useEffect } from "react";

const Register = () => {

    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    async function registerHandler (event){
        event.preventDefault();
        try {
            const response = await fetch("",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                    },
                }),
            })

           const data = await response.json();
           localStorage.setItem("token", data.data.token ) 
           console.log(data.data.token)
           console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }



    return(
        <div className="register" >               
            <form onSubmit={registerHandler} >
                <div>Register</div>
                <div>Username: </div>
                <input type = "text" value={username}  onChange = {changeUsername} className="registerUser"   ></input>
                <div>Password: </div>
                <input type = "text" value={password}  onChange = {changePassword} className="registerPass"   ></input>
                <button type = "submit"  ></button>
            </form>

        </div>

    )


};

export default Register

