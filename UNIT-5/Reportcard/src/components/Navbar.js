import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <span className="brand">🎓 Report Card System</span>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/students" className={({ isActive }) => (isActive ? "active" : "")}>
        All Students
      </NavLink>
      <div className="spacer" />
      {isAdmin ? (
        <>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
            Admin Dashboard
          </NavLink>
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </>
      ) : (
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
          Admin Login
        </NavLink>
      )}
    </div>
  );
}
