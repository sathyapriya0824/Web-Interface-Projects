import React from "react";
import profilePic from "../assets/profile.png";

function Home() {
  return (
    <div className="page home">
      <img src={profilePic} alt="Sathya Priya S" className="profilePic" />
      <h1>Hi, I'm Sathya Priya S</h1>
      <p>Welcome to my portfolio. I'm a Computer Science (Cybersecurity) student
      who enjoys building web applications with React.</p>
    </div>
  );
}

export default Home;
