import React from "react";
import { useStudents, SUBJECTS, calcResult } from "../StudentContext";

export default function StudentList() {
  const { students } = useStudents();

  return (
    <div className="container">
      <div className="card">
        <h2>All Students - Marks & Details</h2>
        {students.length === 0 && (
          <p className="empty">
            No students found. Ask the admin to add students first.
          </p>
        )}
        {students.length > 0 && (
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Class</th>
                  {SUBJECTS.map((sub) => (
                    <th key={sub}>{sub}</th>
                  ))}
                  <th>Total</th>
                  <th>%</th>
                  <th>Grade</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => {
                  const result = calcResult(s.marks);
                  return (
                    <tr key={s.id}>
                      <td>{s.rollNo}</td>
                      <td>{s.name}</td>
                      <td>{s.class}</td>
                      {SUBJECTS.map((sub) => (
                        <td key={sub}>{s.marks[sub]}</td>
                      ))}
                      <td>{result.total}</td>
                      <td>{result.percentage}%</td>
                      <td className={`grade ${result.grade}`}>{result.grade}</td>
                      <td style={{ color: result.failed ? "#d64545" : "#1b7a3d", fontWeight: 600 }}>
                        {result.failed ? "Fail" : "Pass"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
