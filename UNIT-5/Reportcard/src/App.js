import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { StudentProvider } from "./StudentContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentList from "./pages/StudentList";

export default function App() {
  return (
    <AuthProvider>
      <StudentProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/students" element={<StudentList />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </HashRouter>
      </StudentProvider>
    </AuthProvider>
  );
}
