import React from 'react';
import {Link} from "react-router-dom"

const Errorpage = () => {
    return (
        <div style = {{textAlign: "center"}} >
            <div>
                <h1>404 Page Not Found! <br/> Refresh your browser, or try again later.<br/><Link to = "/">Click to go home</Link></h1>
            </div>
        </div>
    )
}


export default Errorpage;