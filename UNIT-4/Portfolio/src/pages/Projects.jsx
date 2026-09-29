import React from "react";

const projects = [
  { title: "Todo App", desc: "A multi-page todo app built with React state management." },
  { title: "Student Report Card", desc: "An admin-login based app to view student marks and details." },
  { title: "Hobby Card", desc: "A responsive React component displaying hobbies and interests." },
];

function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <div className="projectGrid">
        {projects.map((p, i) => (
          <div className="projectCard" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
