import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>
      <div className="links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
