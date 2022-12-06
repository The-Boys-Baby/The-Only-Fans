import { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";


const adminPanel = () => {
// bring in context for user and isadmin
const { adminState: [isAdmin, setIsAdmin], userState: [user, setUser] } = useOutletContext();
//send them back to a profile page if they are not an admin (navigate)
!isAdmin && navigate("/profile"); 

// list user info 
}
const AdminFans = () => {
    console.log("Fans should display");
    const [fans, setFans] = useState([]);
    // fetch all fans including inactive fans
return(
    
    <>
        <div className="createFan" >
        Create Post
        <form onSubmit={createNew} >
        
            <label>
                Enter Title:
            </label>
            <input type="text" value={fan.name}  onChange={(event) => setTitle(event.target.value)} ></input>
            <label>
                Enter Price:
            </label>
            <input type="text" value={null}  onChange={(event) => setPrice(event.target.value)}  ></input>
            <label>
                Enter Description:
            </label>
            <input type="text"  value={product.setPrice}  onChange={(event) => setDescription(event.target.value)}   ></input>
            <button type="submit" > submit </button>
        </form> 
      
       </div>
       </>

)
}
// add, edit, deactivate users









export default adminPanel