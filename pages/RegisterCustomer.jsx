import { useState } from "react";

const RegisterCustomer=()=>{
    const[formData,setFormData]=useState({username:"",email:"",password:""});

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);
        const response=await fetch("http://127.0.0.1:8000/users/api/register/customer",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData),
        });
        const data=await response.json();
        alert(data.message|| data.error);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register as Customer</button>
        </form>
    );
}
export default RegisterCustomer;