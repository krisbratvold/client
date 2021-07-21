import React, {useEffect, useState} from "react";
import {Link} from "@reach/router"
import axios from "axios";

const Products = (props) => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/products/")
        .then((res) => {
            console.log(res);
            setProducts(res.data.products);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:5000/api/products/delete/" + id)
        .then((res) => {
            console.log(res);
            const filteredProducts = products.filter((prod) => {
                return (prod._id !== id);
            })
            setProducts(filteredProducts);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (<div>
            <h2>All Products</h2>

            {products.map((prod) => {
                return(
                    <div key={prod._id}>
                        <h3>
                            <Link to={"/products/" + prod._id}>{prod.title}</Link> 
                            <button onClick={(e) => {
                                handleDelete(prod._id);
                            }}>Delete</button>
                            <Link to={"/products/" + prod._id + "/edit"}>Edit</Link>
                        </h3>
                    </div>
                );
            })}
        </div>
    )
}

export default Products;