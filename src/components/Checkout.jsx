import React,{useContext} from "react";
import { CartContext } from "./CartContext";
const Checkout=()=>{
    const {cart}=useContext(CartContext);

    const handleOrder=()=>{
        fetch("http://127.0.0.1:8000/api/orders",{
            method:"POST",
            Headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({items:cart}),
        })
        .then((Response)=>Response.json())
        .then((data)=>alert("Order placed sucessfully"))
        .catch((error)=>console.error("Error:",error))
    }
    return(
        <>
            <h1>Checkout</h1>
            <button onClick={handleOrder}>Place Order</button>
        </>
    )
}
export default Checkout;