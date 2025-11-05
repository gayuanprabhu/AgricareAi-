import React, {useState} from "react";

const ForgotPassword = ()=>{
  const [email,setEmail]=useState("");
  const handleReset = (e)=>{
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.email===email){
      alert("Password reset link sent! (Demo)");
    } else {
      alert("Email not found");
    }
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};
export default ForgotPassword;
