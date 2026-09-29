import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(
    () => sessionStorage.getItem("isAdmin") === "true"
  );
  const [error, setError] = useState("");

  const login = (username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
      setError("");
      return true;
    }
    setError("Invalid username or password");
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}
