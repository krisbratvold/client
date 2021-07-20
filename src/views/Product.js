import React, {useEffect, useState} from "react";
import axios from "axios";

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

    return (
        <div>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            </div>
    )
}

export default Product;