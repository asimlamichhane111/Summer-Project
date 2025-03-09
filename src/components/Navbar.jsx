import "./navbar.css";
import React, { useContext }  from "react";
import {Link} from "react-router-dom"
import { CartContext } from "./CartContext";
const Navbar=()=>{
    const {cart}=useContext(CartContext);
    return(
        <nav>
            <h2>Welcome Liquor Store</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="products/whisky">Whisky</Link></li>
                <li><Link to="products/rum">Rum</Link></li>
                <li><Link to="products/vodka">Vodka</Link></li>
                <li className="cart"><Link to="/cart">Cart({cart.length})</Link></li>
            </ul>
        </nav>
    );
    
};
export default Navbar;