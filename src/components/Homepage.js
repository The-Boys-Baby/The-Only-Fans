import React from 'react';
import { Link } from 'react-router-dom';




const Homepage = () => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h2>🔥 Welcome to the OnlyFans Marketplace 🔥</h2>
                <h5>Produced by: Garrett, Kenny, Mike, and Dale</h5>
                <div style={{fontSize: 16}}>
                    <p>*Essentially placeholder text*</p>
                    <p>
                        Dreams are like our lives - they come on in an instant, are very powerful,
                        <br/>
                        but often make no sense at all or are sexually deviant.
                    </p>
                    <p>
                        Dreams are what days are made of,
                        <br/>
                        but as we move on to the different stages of our lives,
                        <br/>
                        it's time to get rid of old dreams and invest in the future.
                    </p>
                    <p>
                        This is especially true of older family members,
                        <br/>
                        who work their whole lives to amass possessions and
                        <br/>
                        wealth that they will be too senile to enjoy.
                        <br/><br/>
                        That's where we come in! 
                        <br/>
                        Helping you turn that useless cash into literal wind through your hair.
                        <br/>
                        So many television shows celebrate the new found wealth 
                        <br/>
                        in an old barn or attic - keepsakes that were literally
                        <br/>
                        gathering dust and doing nobody any good.
                    </p>
                    <p>Click the fan to have a look at our inventory!</p>
                    <p>Find something you Like?<br/> Why not <Link to='/Register'>make an account</Link> and place an order!</p>
                    <Link to='/Fans'><img src='https://cdn-icons-png.flaticon.com/512/1675/1675092.png' style={{height: 150}} /></Link>
                </div>
            </div>
        </div>
    )
}


export default Homepage;