import { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";

const AdminFans = () => {
  // bring in context for user and isadmin
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
  } = useOutletContext();
  //send them back to a profile page if they are not an admin (navigate)
  const navigate = useNavigate();
  !isAdmin && navigate("/profile");

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
  console.log(adminFans);
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

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(searchInput.toString());
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
                <form onSubmit={null}>
                  <label>
                  ID {fan.id} - Product Name: {fan.name}
                  </label>
                  <input
                    type="text"
                    placeholder={fan.name}
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  ></input>
                  <label>Enter Price: {fan.price}</label>
                  <input
                    type="text"
                    placeholder={fan.price}
                    value={price}
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                  ></input>
                  <label>Enter Description: {fan.description}</label>
                  <input
                    type="text"
                    placeholder={fan.description}
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  ></input>
                  
                  <button type="submit"> Edit post </button>
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
