import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";

const CreateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const {devHost, createProduct} = routes;

    const navigate = useNavigate();
    
    async function postFans(event) {
        event.preventDefault()
        try {
            if(!localStorage.getItem("token")){
                alert("You must be an admin to view this page")
                navigate('./Login')
            }
            console.log("got through get items")
            const response = await fetch(`${devHost}${createProduct}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }, body: JSON.stringify({
                    name: name,
                    price: price,
                    description : description,
                    filePath : photo
                })
            }
            )
            const data = await response.json()
            console.log(data)
            //left off here
        } catch (error) {
            console.log(error)
        }
    };
    async function changeHandler(event,handle){
        handle(event.target.value)
        console.log(`name: ${name}
        price: ${price}
        Description: ${description}`)
    }
    return(
        <div>
            <div>
                <h2>Post a new Fan:</h2>
                <form onSubmit = {postFans}>
                    <label>Name:</label>
                    <input placeholder="Insert name" value = {name} onChange = {(event)=> {changeHandler(event,setName)}} ></input>
                    <label>Price:</label>
                    <input placeholder="Insert Price" type = "number" value = {price} onChange = {(event)=> {changeHandler(event,setPrice)}}></input>
                    <label>Description:</label>
                    <input placeholder="Insert Description" value = {description} onChange = {(event)=> {changeHandler(event,setDescription)}}></input>
                    <label>Image URL:</label>
                    <input placeholder="Insert Picture URL" value = {photo} onChange = {(event)=> {changeHandler(event,setPhoto)}}></input>
                    <button type = "submit">CreateProduct</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;