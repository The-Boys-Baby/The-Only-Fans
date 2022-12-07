import React, { useState } from "react";
import routes from "../routes";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [aptNumber, setAptNumber] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const navigate = useNavigate();
  const { devHost, checkout } = routes;

  async function checkoutHandler(event) {
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
        // jeremy: do something with data or get rid of it.
        // if you do something, make an if else check.
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("All fields are required to complete the checkout form");
    }
  }
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

  // do an individual event handler
  return (
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
  );
};

export default Checkout;
