import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Student Report Card System</h1>
        <p>
          This system lets the admin add students with their subject marks.
          Anyone can view the full list of students with their marks and
          grades on the <b>All Students</b> page.
        </p>
        <p>
          <Link to="/students">View All Students →</Link>
        </p>
        <p>
          <Link to="/login">Login as Admin →</Link>
        </p>
      </div>
    </div>
  );
}
