import React, { useState, useEffect } from "react";

const Login = () => {

    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    async function loginFunc (event){
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
                    password: username
                    },
                }),
            })

           const data = await response.json(); // jeremy: try a bit of destructuring here.
           localStorage.setItem("token", data.data.token ) // jeremy: so you can use it here more easily
           console.log(data.data.token)// jeremy: and here.
           console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    const changeUsername = (event) => {
        setUsername(event.target.value) // jeremy: better to have an input value that you change "onChange".
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }



    return(
        <div>
            <form onSubmit={loginFunc} > {/* jeremy: which you use here on submit event: setUsername(inputUsername) for example */}
                <div>Username: </div>
                <input type = "text" value={username}  onChange = {changeUsername} className="registerUser"   ></input>
                <div>Password: </div>
                <input type = "text" value={password}  onChange = {changePassword} className="registerPass"   ></input>
                <button type = "submit" ></button>
            </form>

        </div>

    )


};

export default Login;

