import React, {useState, useEffect} from "react";
import {navigate} from "@reach/router"
import axios from "axios";


const EditProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/products/" + props.id)
        .then((res) => {
            console.log(res);
            setTitle(res.data.product.title);
            setPrice(res.data.product.price);
            setDescription(res.data.product.description);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [props.id]);

    const editProduct = e => {
        e.preventDefault();
        const editedProduct = {
            title : title,
            price : price,
            description : description
        };
        axios.put("http://localhost:5000/api/products/update/" + props.id, editedProduct)
        .then((res)=>{
            console.log(res);
            navigate("/products/" + props.id);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return <div>
        <h1>Product Manager</h1>
        <form onSubmit={(e) => {
            editProduct(e);
        }}>
            <label>Title:</label>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} value={title} />
            <label>Price:</label>
            <input type="number" onChange={(e) => {setPrice(e.target.value)}} value={price}/>
            <label>Description:</label>
            <input type="text" onChange={(e) => {setDescription(e.target.value)}} value={description}/>
            <button>Update</button>
        </form>
        </div>
}

export default EditProduct