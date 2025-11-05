import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleSignUp = (e)=>{
    e.preventDefault();
    if(!name||!email||!password) return alert("Please fill all fields");
    const user = {name,email,password};
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Create Account 🌱</h2>
      <form onSubmit={handleSignUp}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default Signup;
