import React, { useState, useEffect } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";
import routes from "../routes";

const IndivFans = () => {
  console.log("Fans should display");
  const [newfans, setNewFans] = useState([]);
  const { devHost, marketplace } = routes;
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
    cartState: [cart, setCart],
  } = useOutletContext();
  useEffect(() => {
    async function postHandler() {
      try {
        const response = await fetch(`${devHost}${marketplace}/${productId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setNewFans(data);
      } catch (error) {
        console.log(error);
      }
    }
    postHandler();
  }, []);
  async function changeQuantity(event) {
    setQuantity(event.target.value);
    console.log(quantity);
  }
  async function submitButton() {
    try {
      console.log(`${devHost}${marketplace}/${productId}`);

      const response = await fetch(`${devHost}${marketplace}/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          quantity: quantity,
        }),
      });
      const data = await response.json();
      console.log(data);
      setCart(data.updatedOrder);
      // setCart = number is what jeremy is talking about instead of setCart()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {newfans ? (
        <div>
          <div key={newfans.id}>
            <h2>{newfans.name}</h2>
            <p>{newfans.price}</p>
            <p>{newfans.description}</p>
            <div>
              <img src={newfans.pictures} alt={fans.name} />
            </div>
            <button onClick={submitButton}>Add To Cart</button>
            <select
              name="fan"
              id="quantity"
              value={quantity}
              onChange={changeQuantity}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      ) : (
        "Aint Nothin"
      )}
    </div>
  );
};

export default IndivFans;
