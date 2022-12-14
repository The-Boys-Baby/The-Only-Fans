import { useOutletContext, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import routes from "../routes"
const Responsibility =  () => {
    const {
        adminState: [isAdmin, setIsAdmin],
        userState: [user, setUser],
        fanState: [fans, setFans],
      } = useOutletContext();
      const {devHost, users} = routes
      //send them back to a profile page if they are not an admin (navigate)
      const navigate = useNavigate();
      // !isAdmin && navigate("/profile");
    
      // list user info
    
      //searchbarnyID
    
      //search function (filter through all prods) if empty, show all
      const [startUser, setUsers] = useState([]);
      const [search, setSearch] = useState("");
      const [searchInput, setSearchInput] = useState();
      const [filteredUsers, setFilteredUsers] = useState([]);
      const [id, setId] = useState(0);
      const [click, setClick] = useState(false);
      // fetch all fans including inactive fans
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
                setUsers(data.users);
                setFilteredUsers(data.users)
            } catch (error) {
                console.log(error);
            }
        }
        userHandler();
    }, []);
    useEffect(() => {
      async function userHandler() {
            try {
                const response = await fetch(`${devHost}/admin/promote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }, body: JSON.stringify(
                      {
                        id
                      }
                    ),
                });
                const data = await response.json();
                console.log(data.users);
                setUsers(data.users);
                setFilteredUsers(data.users)
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
                      setUsers(data.users);
                      setFilteredUsers(data.users)
                  } catch (error) {
                      console.log(error);
                  }
              }
              userHandler();
            } catch (error) {
                console.log(error);
            }
        }
        userHandler();
    }, [id]);
      useEffect(() => {
        if (search) {
          const newFilter = startUser.filter((user) => {
            return `${user.username}`.includes(search);
          });
          setFilteredUsers(newFilter);
        } else {
          setFilteredUsers(startUser);
        }
      }, [search]);
    
      const handleInputChange = async (event) => {
        setSearchInput(event.target.value);
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        setSearch(searchInput.toString());
      };
      const changeclick = async (fan) => {
        setId(fan);
        console.log(id, fan, click);
        if (id == fan) {
          setClick(!click);
        } else {
          setClick(true);
        }
      };
      return (
        <>
          <form onSubmit={handleSubmit}>
            <label for="search">
              <input
                title="search"
                type="text"
                placeholder="Search Username"
                onChange={handleInputChange}
                value={searchInput}
              ></input>
            </label>
            <button type="submit">Search</button>
          </form>
          <div>
            <div className='userStuff'>
                <button><Link to="/Homepage">Go Home</Link></button>
                {
                    filteredUsers && !!filteredUsers.length && filteredUsers.map((user, idx) => {
                        return (
                            <div>                                
                                <div key={idx}>
                                    <h2>ID: {user.id} - {user.username}</h2>
                                    <p></p>
                                    <p>First Name: {user.firstname}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Admin: {user.isadmin === true ? "Admin" : "User"}</p>
                                    <div>{user.isadmin === true ? <button className="adminButton" type = "button" onClick={()=>setId(user.id)}>Demote</button> : <button type = "button"className="adminButton" onClick={() => setId(user.id)}>Promote</button>}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
      );
}

export default Responsibility