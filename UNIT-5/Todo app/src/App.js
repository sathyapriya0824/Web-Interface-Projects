import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./TodoContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Stats from "./pages/Stats";

export default function App() {
  return (
    <TodoProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </HashRouter>
    </TodoProvider>
  );
}
