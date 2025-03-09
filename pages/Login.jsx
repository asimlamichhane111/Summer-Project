import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Login=()=>{
    const [formData,setFormData]=useState({username:"",password:""});
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch("http://127.0.0.1:8000/api/login/",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username:formData.username,password:formData.password}),
        }
        );
        const data=await response.json();
        if (data.access){
            localStorage.setItem("token",data.access);
            localStorage.setItem("role",data.role);
            if (data.role==="owner"){
                navigate("/owner-dashboard");
        
            }
            else if(data.role==="customer"){
                navigate("/customer-dashboard");
            }
            else{
                alert("Login failed");
            }
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
}
export default Login;