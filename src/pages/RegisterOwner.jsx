import { useState } from "react";
const RegisterOwner = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" ,phone:""});
  
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const cleanedData = {
        username: formData.username.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
        phone: formData.phone.trim(),
    };
      const response = await fetch("http://127.0.0.1:8000/users/api/register/owner/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });
      const data = await response.json();
      if(!formData.username||!formData.email||!formData.password||!formData.phone){
        alert("please fill all the fields");
        return;
    }
    };
  
    return (
      <form onSubmit={handleSubmit} method="POST">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone number" onChange={handleChange}/>
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default RegisterOwner;
  