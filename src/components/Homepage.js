import React from 'react';
import { Link } from 'react-router-dom';
import OFlogo from '../Images/OF.png'




const Homepage = () => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h2>🔥 Welcome to the OnlyFans Marketplace 🔥</h2>
                <h5>Produced by: Garrett, Kenny, Mike, and Dale</h5>
                <div style={{fontSize: 16}}>
                    <img style={{height: "200px"}} src={OFlogo} />
                    <p>Click the fan to have a look at our inventory!</p>
                    <p>Find something you Like?<br/> Why not <Link to='/Register'>make an account</Link> and place an order!</p>
                    <Link to='/Fans'><img src='https://cdn-icons-png.flaticon.com/512/1675/1675092.png' style={{height: 150}} /></Link>
                </div>
            </div>
        </div>
    )
}


export default Homepage;