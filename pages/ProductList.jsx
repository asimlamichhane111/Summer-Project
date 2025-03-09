import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import "../components/ProductCard.css"
const ProductList=()=>{
    const {category}=useParams();
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/products")
        .then(Response=> Response.json())
        .then(data=>setProducts(data))
        .catch(error=>console.error("Error fetching data:",error));

    },[category]);
    return(
        <div className="product-list">
            <h1>{category.toUpperCase()} Products</h1>
            <div className="product-grid">
                {
                    products.length===0?
                    (<p>Loading products..</p>):
                    (products.map((product)=>(<li><ProductCard key={product.id} product={product}/></li>)))
                }
            </div>
        </div>
    );
};
export default ProductList;