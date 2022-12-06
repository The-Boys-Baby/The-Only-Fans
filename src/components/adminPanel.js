import { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { search } from "../../../The-Only-Fans-Backend/api";

const adminPanel = () => {
  // bring in context for user and isadmin
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
  } = useOutletContext();
  //send them back to a profile page if they are not an admin (navigate)
  !isAdmin && navigate("/profile");

  // list user info

  //searchbarnyID

  //search function (filter through all prods) if empty, show all
};
const AdminFans = () => {
  const [adminFans, setAdminFans] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState(0);
  const [filteredFans, setFilteredFans] = useState([]);
  console.log("Fans should display");
  // fetch all fans including inactive fans
  useEffect(() => {
    const newFilter = adminFans.filter((fan) => {
      return `${fan.id}`.includes(search);
    });
    setFilteredFans(newFilter);
  }, [search]);
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
      {filteredFans.map((fan, index) => {
        return (
          <div key={index} className="createFan">
            Create Post
            <form onSubmit={createNew}>
              <label>Enter Title:</label>
              <input
                type="text"
                value={fan.name}
                onChange={(event) => setTitle(event.target.value)}
              ></input>
              <label>Enter Price:</label>
              <input
                type="text"
                value={null}
                onChange={(event) => setPrice(event.target.value)}
              ></input>
              <label>Enter Description:</label>
              <input
                type="text"
                value={product.setPrice}
                onChange={(event) => setDescription(event.target.value)}
              ></input>
              <button type="submit"> submit </button>
            </form>
          </div>
        );
      })}
    </>
  );
};
// add, edit, deactivate users

export default adminPanel;
