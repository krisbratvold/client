import React, {useState} from "react";
import {navigate} from "@reach/router"
import axios from "axios";

import Products from './Products';

const Form = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescrition] = useState("");

    const createProduct = e => {
        e.preventDefault();
        const newProduct = {
            title : title,
            price : price,
            description : description
        };
        axios.post("http://localhost:5000/api/products/new", newProduct)
        .then((res)=>{
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return <div>
        <h1>Product Manager</h1>
        <form onSubmit={(e) => {
            createProduct(e);
        }}>
            <label>Title:</label>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
            <label>Price:</label>
            <input type="number" onChange={(e) => {setPrice(e.target.value)}} />
            <label>Description:</label>
            <input type="text" onChange={(e) => {setDescrition(e.target.value)}} />
            <button>Submit</button>
        </form>
        <Products></Products>
        </div>
}

export default Form;