import React from "react";
import "./Hobby.css";

function Hobby() {

  const hobbies = [
    {
      icon: "🎧",
      title: "Listening to Music",
      description:
        "I enjoy listening to music because it helps me relax, refresh my mind, and stay positive.",
      type: "Hobby"
    },
    {
      icon: "🎤",
      title: "Singing",
      description:
        "Singing is one of my favorite activities. It helps me express my emotions and enjoy my free time.",
      type: "Hobby"
    },
    {
      icon: "💃",
      title: "Dancing",
      description:
        "I love dancing because it keeps me energetic, creative, and confident.",
      type: "Hobby"
    },
    {
      icon: "🩺",
      title: "Caring for Patients",
      description:
        "My dream is to treat patients and help people by making a positive difference in their lives.",
      type: "Dream"
    },
    {
      icon: "💻",
      title: "Website Development",
      description:
        "I enjoy creating websites and learning how design, technology, and functionality come together.",
      type: "Interest"
    }
  ];

  return (
    <div className="hobby-page">

      {/* Header */}
      <header className="hobby-header">
        <p className="subtitle">MY PERSONAL SPACE</p>

        <h1>
          My Hobbies & <span>Passions</span>
        </h1>

        <p className="intro">
          A few things that I enjoy, dream about, and love learning.
        </p>
      </header>


      {/* Hobby Cards */}
      <section className="hobby-container">

        {hobbies.map((hobby, index) => (

          <div className="hobby-card" key={index}>

            <div className="card-top">
              <div className="hobby-icon">
                {hobby.icon}
              </div>

              <span className="hobby-type">
                {hobby.type}
              </span>
            </div>

            <h2>{hobby.title}</h2>

            <p>{hobby.description}</p>

            <div className="card-number">
              0{index + 1}
            </div>

          </div>

        ))}

      </section>


      {/* Bottom Quote */}
      <div className="hobby-footer">
        <p>
          "Keep learning, keep dreaming, and keep doing what you love."
        </p>
      </div>

    </div>
  );
}

export default Hobby;