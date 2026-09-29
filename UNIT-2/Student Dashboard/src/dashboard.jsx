import React from "react";
import "./Dashboard.css";
import sathyaPhoto from "./assets/priya.jpeg";

function Dashboard() {

  // My Details
  const student = {
    name: "Sathya Priya S",
    registerNo: "411625149040",
    college:
      "Prince Dr.K Vasudevan College of Engineering and Technology",
    department: "CSE - Cyber Security",
    semester: "3rd Semester",
    cgpa: "8.5",
    attendance: "80%",
  };

  // Subjects
  const subjects = [
    {
      name: "Web Technology",
      code: "24CS292",
      grade: "A+",
      progress: 90,
    },
    {
      name: "Object Oriented Programming using Java",
      code: "24CS294",
      grade: "A",
      progress: 85,
    },
    {
      name: "Problem Solving using Python",
      code: "24CS293",
      grade: "A",
      progress: 85,
    },
  ];

  // Skills
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Pandas",
    "NumPy",
    "GitHub",
    "Cyber Security",
    "Linux",
  ];

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">🎓</div>
        <h2>Student Portal</h2>

        <nav>
          <a href="#dashboard">🏠 Dashboard</a>
          <a href="#profile">👤 My Profile</a>
          <a href="#subjects">📚 Subjects</a>
          <a href="#skills">💻 Skills</a>
          <a href="#projects">🚀 Projects</a>
          <a href="#certificates">🏆 Certificates</a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">

        {/* HEADER */}
        <header className="header">

          <div>
            <p className="welcome">
              Welcome back 👋
            </p>

            <h1>{student.name}</h1>

            <p>
              {student.department} | Student Dashboard
            </p>
          </div>

          {/* MY PHOTO */}
          <div className="profile-photo">
            <img
              src={sathyaPhoto}
              alt="Sathya Priya"
            />
          </div>
        </header>

        {/* PROFILE SECTION */}
        <section className="profile-section" id="profile">

          <div className="profile-card">
            <h2>👤 My Profile</h2>
            <div className="profile-details">

              <div>
                <span>Name</span>
                <strong>{student.name}</strong>
              </div>

              <div>
                <span>Register Number</span>
                <strong>{student.registerNo}</strong>
              </div>

              <div>
                <span>College</span>
                <strong>{student.college}</strong>
              </div>

              <div>
                <span>Department</span>
                <strong>{student.department}</strong>
              </div>

              <div>
                <span>Semester</span>
                <strong>{student.semester}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* STAT CARDS */}
        <section className="stats">

          <div className="stat-card">
            <h3>📊 CGPA</h3>
            <p>{student.cgpa}</p>
          </div>

          <div className="stat-card">
            <h3>📅 Attendance</h3>
            <p>{student.attendance}</p>
          </div>

          <div className="stat-card">
            <h3>📚 Subjects</h3>
            <p>{subjects.length}</p>
          </div>

          <div className="stat-card">
            <h3>💻 Skills</h3>
            <p>{skills.length}+</p>
          </div>
        </section>

        {/* SUBJECTS */}
        <section className="subjects-section" id="subjects">

          <div className="section-title">
            <h2>📚 My Subjects</h2>
            <p>Current semester subjects and progress</p>
          </div>

          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <div className="subject-card" key={index}>
                <div className="subject-header">

                  <div>
                    <h3>{subject.name}</h3>
                    <p>{subject.code}</p>
                  </div>

                  <span className="grade">
                    {subject.grade}
                  </span>

                </div>

                <div className="progress-info">
                  <span>Progress</span>
                  <span>{subject.progress}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">

          <div className="section-title">
            <h2>💻 Technical Skills</h2>
            <p>Technologies and tools I am learning</p>
          </div>

          <div className="skills-container">
            {skills.map((skill, index) => (

              <span className="skill" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="projects">

          <div className="section-title">
            <h2>🚀 Projects</h2>
            <p>My recent projects</p>
          </div>

          <div className="project-grid">

            <div className="project-card">
              <h3>🔐 Password Strength Checker</h3>
              <p>
                A Python-based application that checks password
                strength and provides security suggestions.
              </p>
              <span>Python</span>
            </div>

            <div className="project-card">
              <h3>📚 Library Management System</h3>
              <p>
                A simple library management application developed
                using Python.
              </p>
              <span>Python</span>
            </div>

            <div className="project-card">
              <h3>🌐 Student Dashboard</h3>
              <p>
                A responsive student dashboard created using React,
                HTML and CSS.
              </p>
              <span>React</span>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="certificates-section" id="certificates">
          <div className="section-title">
            <h2>🏆 Certificates</h2>
            <p>My learning achievements</p>
          </div>
          <div className="certificate-grid">

            <div className="certificate-card">
              <h3>🐍 Python Programming</h3>
              <p>Python Development Certificate</p>
            </div>

            <div className="certificate-card">
              <h3>☕ Java Programming</h3>
              <p>Java Programming Certificate</p>
            </div>

            <div className="certificate-card">
              <h3>🛡️ Introduction to Cybersecurity</h3>
              <p>Cisco Cybersecurity Certificate</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>
            © 2026 {student.name} | CSE - Cyber Security
          </p>
        </footer>
      </main>
    </div>
  );
}
export default Dashboard;