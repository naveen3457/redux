import React from "react"
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

import "../styles/productcard.scss";
export default function ProductCard({product}) {

    const cart = useSelector(state =>state.cart);  //read only
    const dispatch = useDispatch();
    
    return(
        <div className="productCard">
            {product.sale_price && <p className="discount">
                {Math.round(((product.price-product.sale_price)/product.price)*100)}%</p>}
                <img className="imgitem" src={product.image.original} />
                <div className="flexBox">
                   {product.sale_price &&<p className="price">${product.sale_price}</p>}
                   <p className={`price ${product.sale_price && "strike"}`}>${product.price}</p>
                </div>
                <p>{product.name}</p>
                <button className="addbtn" onClick={()=>dispatch(addToCart(product))}>ADD TO CART</button>
        </div>
    )
}










