import "./navbar.css";
import React, { useContext }  from "react";
import {Link} from "react-router-dom"
import {CartContext} from "./CartContext";
const Navbar=()=>{
    const context=useContext(CartContext);
    if(!context){
        console.error("cartcontext is undefined");
        return null;
    }
    const {cart}=context;
    return(
        <nav>
            <h2>Welcome Liquor Store</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="products/whisky">Whisky</Link></li>
                <li><Link to="products/rum">Rum</Link></li>
                <li><Link to="products/vodka">Vodka</Link></li>
                <li className="cart"><Link to="/cart">Cart({cart.length})</Link></li>
            </ul>
        </nav>
    );
    
};
export default Navbar;