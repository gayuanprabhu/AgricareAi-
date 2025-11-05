import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.email===email && user.password===password){
      localStorage.setItem("isLoggedIn", "true");
      navigate("/upload");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <h2>Login 🌿</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p><Link to="/forgot-password">Forgot Password?</Link></p>
    </div>
  );
};
export default Login;
