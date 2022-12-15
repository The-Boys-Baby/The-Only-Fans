import { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate, json } from "react-router-dom";
import routes from "../routes";
const AdminFans = () => {
  // bring in context for user and isadmin
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
  } = useOutletContext();
  const {devHost} = routes
  //send them back to a profile page if they are not an admin (navigate)
  const navigate = useNavigate();
  // !isAdmin && navigate("/profile");

  // list user info

  //searchbarnyID

  //search function (filter through all prods) if empty, show all
  const [adminFans, setAdminFans] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState();
  const [filteredFans, setFilteredFans] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [click, setClick] = useState(false);
  // fetch all fans including inactive fans

  useEffect(() => {
    if (search) {
      const newFilter = adminFans.filter((fan) => {
        return `${fan.id}`.includes(search);
      });
      setFilteredFans(newFilter);
    } else {
      setFilteredFans(adminFans);
    }
  }, [search]);

  useEffect(() => {
    setAdminFans(fans);
    setFilteredFans(fans);
    console.log(filteredFans);
  }, []);

  async function updateAndChange(){
    try {
        const response =  await fetch( `${devHost}products/update`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }, body: JSON.stringify({
            id : id,
            name : name,
            description : description,
            price : price
          })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  }

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
            type="number"
            placeholder="Fan id number"
            onChange={handleInputChange}
            value={searchInput}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
      {filteredFans && filteredFans.length
        ? filteredFans.map((fan, index) => {
            return (
              <div key={index} className="createFan">
                Create Post
                <form onSubmit={(event) => event.preventDefault()}>
                  <label>
                    ID {fan.id} - Product Name: {fan.name}
                  </label>
                  {id == fan.id && click == true ? (
                    <input
                      type="text"
                      placeholder={fan.name}
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    ></input>
                  ) : null}
                  <label>Enter Price: {fan.price}</label>
                  {id == fan.id && click == true ? (
                    <input
                      type="text"
                      placeholder={fan.price}
                      value={price}
                      onChange={(event) => {
                        setPrice(event.target.value);
                      }}
                    ></input>
                  ) : null}
                  <label>Enter Description: {fan.description}</label>
                  {id == fan.id && click === true ? (
                    <input
                      type="text"
                      placeholder={fan.description}
                      value={description}
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                    ></input>
                  ) : null}
                  {id == fan.id && click === true ? (<button
                    type="submit"
                    onClick={(event) => {
                      event.preventDefault()
                      updateAndChange()
                    }}
                  >
                    {" "}
                    Confirm Edit{" "}
                  </button>) : null}
                  <button type = "button" onClick={() => {
                    changeclick(fan.id)
                    }}>Update</button>
                </form>
              </div>
            );
          })
        : "none"}
    </>
  );
};
// add, edit, deactivate users

export default AdminFans;
