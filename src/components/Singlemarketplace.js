import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Link, useParams } from "react-router-dom";
=======
import { Link, useParams, useOutletContext } from "react-router-dom";
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
import routes from "../routes";

const IndivFans = () => {
  console.log("Fans should display");
<<<<<<< HEAD
  const [fans, setFans] = useState([]);
  const { devHost, marketplace } = routes;
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

=======
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
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
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
<<<<<<< HEAD
        setFans(data);
=======
        setNewFans(data);
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
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
<<<<<<< HEAD
          Authorization: `Bearer ${localStorage.getItem("token")}`,
=======
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
        },
        body: JSON.stringify({
          quantity: quantity,
        }),
      });
      const data = await response.json();
      console.log(data);
<<<<<<< HEAD
=======
      setCart(data.updatedOrder);
      // setCart = number is what jeremy is talking about instead of setCart()
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
<<<<<<< HEAD
      {fans ? (
        <div>
          <div key={fans.id}>
            <h2>{fans.name}</h2>
            <p>{fans.price}</p>
            <p>{fans.description}</p>
            <div>
              <img src={fans.pictures} alt={fans.name} />
=======
      {newfans ? (
        <div>
          <div key={newfans.id}>
            <h2>{newfans.name}</h2>
            <p>{newfans.price}</p>
            <p>{newfans.description}</p>
            <div>
              <img src={newfans.pictures} alt={fans.name} />
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
            </div>
            <button onClick={submitButton}>Add To Cart</button>
            <select
              name="fan"
              id="quantity"
              value={quantity}
              onChange={changeQuantity}
            >
<<<<<<< HEAD
              {/* jeremy: Array(100).fill(null).map((el, idx) => <option value={idx+1}>{idx+1}</option>) 
                ideally this is based off of actual warehouse numbers. product.warehouseCount
              */}
=======
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
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
<<<<<<< HEAD
        <p>Aint Nothin</p>
=======
        "Aint Nothin"
>>>>>>> 05566999fde3aec5a957216ead9b679bf36437d4
      )}
    </div>
  );
};

export default IndivFans;
