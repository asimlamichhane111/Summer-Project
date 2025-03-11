import React,{createContext,useState} from "react";
export const CartContext=createContext(null);
export const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart([...cart,product]);
    };
    console.log("cartContext Loaded",{cart,addToCart});
    return(
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    );
}