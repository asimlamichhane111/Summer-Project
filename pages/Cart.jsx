import React,{useContext} from "react";
import { CartContext } from "../components/CartContext";

const Cart=()=>{
    const {cart}=useContext(CartContext);
    return(
        <>
        <h1>Shopping Cart</h1>
        <div className="products-container">
        {cart.length===0?(<p>Your cart is empty</p>):(
            <ul>
                {cart.map((item,index)=>(
                    <li key={index}>
                        {item.name}-Rs{item.price}
                    </li>
                ))}
            </ul>
        )}
        </div>
        </>
    )
};
export default Cart;