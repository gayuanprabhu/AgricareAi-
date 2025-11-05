import React from "react";
import { Link } from "react-router-dom";
const Navbar = ()=>(
  <nav className="navbar">
    <h2>AgriCare 🌿</h2>
    <div className="nav-links">
      <Link to="/">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/upload">Upload</Link>
    </div>
  </nav>
);
export default Navbar;
