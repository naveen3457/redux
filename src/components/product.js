import axios from "axios";
import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";
import ProductCard from "./productcard";
import "../styles/productcard.scss";


const url = "https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish";
const Products =()=>{
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const {data} = await axios.get(url);
            setProducts(data.data);
        }
     catch (error) {
        console.log(error);
    }

}

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className="mainn" >
           {products.map(e=><ProductCard key={uuid()} product={e}/>)}
        </div>
    )
}


export default Products;