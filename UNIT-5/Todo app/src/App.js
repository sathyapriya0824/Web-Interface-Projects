import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./TodoContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Stats from "./pages/Stats";

export default function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}
