import React,{useEffect,useState} from "react";
const OwnerDashboard=()=>{
    const[products,setProducts]=useState([]);
    const[orders,setOrders]=useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/products/")
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error("Error fetching products:", error));

        fetch("http://127.0.0.1:8000/api/orders/")
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error("Error fetching orders:", error));
    },[]);
    return(
        <>
            <h1>Owner Dashboard</h1>
            <section className="OwnerInventory">
                <h2>Inventory</h2>
                <ul>{products.map((product)=>(
                     <li key={product.id}>{product.name}-{product.quantity} in stock</li>
                ))}                
                </ul>
            </section>
            <section className="OwnerOrders">
                <h2>Orders</h2>
                <ul>{orders.map((order)=>(
                     <li key={order.id}>{order.customer_name}-{order.status}</li>
                ))}                
                </ul>
            </section>
        </>
    );
}
export default OwnerDashboard;