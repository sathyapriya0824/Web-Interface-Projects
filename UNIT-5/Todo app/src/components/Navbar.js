import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="brand">📝 Todo App</span>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Completed
      </NavLink>
      <NavLink to="/stats" className={({ isActive }) => (isActive ? "active" : "")}>
        Stats
      </NavLink>
    </div>
  );
}
