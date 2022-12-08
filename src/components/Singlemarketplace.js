import React, { useState, useEffect } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";
import routes from "../routes";

const IndivFans = () => {
  console.log("Fans should display");
  const { devHost, marketplace } = routes;
  const { productId } = useParams();
  const [id, setId] = useState(productId);
  const [quantity, setQuantity] = useState(1);
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
  } = useOutletContext();
  const [indivFan, setIndivFan] = useState(
    fans.find((fan, index) => {
      return productId == fan.id;
    }) || {}
  );

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
        setIndivFan(data);
      } catch (error) {
        console.log(error);
      }
    }
    postHandler();
  }, [id]);
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
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="singleProdApp">
      <div className="singleProdBox">
        <div className="singleProd">
          {indivFan?.id ? (
            <div>
              <div key={indivFan.id}>
                <h2>{indivFan.name}</h2>
                <p>${indivFan.price}</p>
                <p>{indivFan.description}</p>
                <div>
                  <img
                    className="singleProdPhoto"
                    src={indivFan.pictures}
                    alt={indivFan.name}
                  />
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
          {console.log(fans)}
        </div>
      </div>
      <div className="prodBarBox">
        {fans &&
          fans.map((notFan, idx) => {
            if (notFan.id != indivFan.id) {
              return (
                <div key={idx} className="prodBox">
                  <img
                    className="fanPics"
                    src={notFan.pictures}
                    alt={notFan.name}
                  />
                  <p>{notFan.name} </p>
                  <p>${notFan.price} </p>
                  <Link onClick={() => {
                    setId(notFan.id);
                  }} to={`/Fans/${notFan.id}`}>Go to product</Link>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default IndivFans;
