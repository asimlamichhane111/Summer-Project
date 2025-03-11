import React, { useContext } from "react";
import './ProductCard.css';
import { CartContext } from "./CartContext";
const ProductCard=({product})=>{
    const {addToCart}=useContext(CartContext);
    return(
        <div className="product-card">
            <img className='product-image'src={product.image}alt={product.name}/>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: Rs. {product.price}</p>
            <button className="add-to-cart" onClick={()=>addToCart(product)}>
                Add to Cart</button>
        </div>
    );
};
export default ProductCard;