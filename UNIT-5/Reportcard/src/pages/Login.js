import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/admin");
    }
  };

  return (
    <div className="container">
      <div className="card login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123"
          />
          {error && <p className="error-msg">{error}</p>}
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <p style={{ fontSize: 12, color: "#888", marginTop: 14 }}>
          Demo credentials — Username: admin, Password: admin123
        </p>
      </div>
    </div>
  );
}
