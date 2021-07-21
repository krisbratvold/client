import React, {useEffect, useState} from "react";
import axios from "axios";
import { navigate, Redirect } from "@reach/router";

const Product = (props) => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:5000/api/products/" + props.id)
        .then((res) => {
            console.log(res);
            setProduct(res.data.product);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [props._id]);

    if (product === null){
        return "Loading..."
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:5000/api/products/delete/" + id)
        .then((res) => {
            console.log(res);
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={(e) => {
                                handleDelete(product._id);
                            }}>Delete</button>
            </div>
    )
}

export default Product;