import React, { useState, useEffect } from "react";
import routes from "../routes";
import { useNavigate, useOutletContext } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [aptNumber, setAptNumber] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [newCart, setNewCart] = useState([]);
  const [indexR, setIndexR] = useState(0);
  const navigate = useNavigate();
  const { devHost, checkout } = routes;
  const {
    adminState: [isAdmin, setIsAdmin],
    userState: [user, setUser],
    fanState: [fans, setFans],
    cartState: [cart, setCart],
  } = useOutletContext();
  useEffect(() => {
    async function cart() {
      try {
        const response = await fetch(`${devHost}checkout/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setCart(data.order.items);
        setNewCart(data.order.items);
      } catch (error) {
        console.log(error);
      }
    }
    cart();
  }, []);

  useEffect(() => {
    async function deleteCart() {
      try {
        const response = await fetch(`${devHost}checkout/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setNewCart(data.order.items);
      } catch (error) {
        console.log(error);
      }
    }
    deleteCart();
  }, [indexR]);

  async function checkoutHandler(event) {
    event.preventDefault()
    if ((name, address, zipcode, aptNumber, creditCard, expiration, cvvCode)) {
      try {
        const response = await fetch(`${devHost}${checkout}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            address: address,
            zipcode: zipcode,
            aptNumber: aptNumber,
            creditCard: creditCard,
            expiration: expiration,
            cvvCode: cvvCode,
          }),
        });
        const data = await response.json();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("All fields are required to complete the checkout form");
    }
  }
  const removeItemHandler = async (id) => {
    try {
      const response = await fetch(`${devHost}checkout/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  const changeZipcode = (event) => {
    setZipcode(event.target.value);
  };
  const changeAptNumber = (event) => {
    setAptNumber(event.target.value);
  };
  const changeCreditCard = (event) => {
    setCreditCard(event.target.value);
  };
  const changeExpiration = (event) => {
    setExpiration(event.target.value);
  };
  const changeCvvCode = (event) => {
    setCvvCode(event.target.value);
  };

  const submitHandler = (event, id) => {
    event.preventDefault();
    removeItemHandler(id);
    setIndexR(indexR + 1);
  };
  return (
    <div>
      <div>
        <p></p>
        {newCart &&
          !!newCart.length &&
          newCart.map((cart, index) => {
            return (
              <form
                key={index}
                onSubmit={(event) => submitHandler(event, cart.id)}
              >
                <div
                  style={{
                    border: "1px solid black",
                    margin: "5px",
                    padding: "5px",
                  }}
                  key={index}
                >
                  <p>Order Number: {cart.id}</p>
                  <p>Product Id: {cart.productid}</p>
                  <p>Price: ${cart.orderprice}</p>
                  <p>Quantity: {cart.quantity}</p>
                  <button onClick = {(event) => submitHandler(event, cart.id)}>remove From Cart</button>
                </div>
              </form>
            );
          })}
      </div>
      <div className="registerBox">
        <div className="register">
          <h1>Checkout</h1>
          <form onSubmit={checkoutHandler}>
            <label>
              Name on Card:
              <input
                type="text"
                value={name}
                onChange={changeName}
                className="registerUser"
                placeholder="First and Last Name..."
              ></input>
            </label>
            <label>
              Address of Card Holder:
              <input
                type="text"
                value={address}
                onChange={changeAddress}
                className="registerPass"
                placeholder="Address..."
              ></input>
            </label>
            <label>
              Apartment Number:
              <input
                type="text"
                value={aptNumber}
                onChange={changeAptNumber}
                className="registerUser"
                placeholder="Apartment Number..."
              ></input>
            </label>
            <label>
              Zipcode:
              <input
                type="text"
                value={zipcode}
                onChange={changeZipcode}
                className="registerPass"
                placeholder="Zipcode..."
              ></input>
            </label>
            <label>
              Credit Card Number:
              <input
                type="text"
                value={creditCard}
                onChange={changeCreditCard}
                className="registerUser"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              ></input>
            </label>
            <label>
              Expiration Date:
              <input
                type="text"
                value={expiration}
                onChange={changeExpiration}
                className="registerUser"
                placeholder="Expiration Date..."
              ></input>
            </label>
            <label>
              CVV Code (on back of card):
              <input
                type="text"
                value={cvvCode}
                onChange={changeCvvCode}
                className="registerUser"
                placeholder="CVV Code..."
              ></input>
            </label>
            <button className="checkoutButton" type="submit"></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
