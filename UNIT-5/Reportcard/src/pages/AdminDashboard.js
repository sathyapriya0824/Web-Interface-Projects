import React, { useState } from "react";
import { useStudents, SUBJECTS, calcResult } from "../StudentContext";

const emptyMarks = SUBJECTS.reduce((acc, sub) => ({ ...acc, [sub]: "" }), {});

export default function AdminDashboard() {
  const { students, addStudent, deleteStudent } = useStudents();
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [marks, setMarks] = useState(emptyMarks);
  const [formError, setFormError] = useState("");

  const handleMarkChange = (subject, value) => {
    setMarks((prev) => ({ ...prev, [subject]: value }));
  };

  const resetForm = () => {
    setName("");
    setRollNo("");
    setStudentClass("");
    setMarks(emptyMarks);
    setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !rollNo.trim()) {
      setFormError("Name and Roll No are required.");
      return;
    }
    const marksNumeric = {};
    for (const sub of SUBJECTS) {
      const val = Number(marks[sub]);
      if (marks[sub] === "" || isNaN(val) || val < 0 || val > 100) {
        setFormError(`Enter a valid mark (0-100) for ${sub}.`);
        return;
      }
      marksNumeric[sub] = val;
    }
    addStudent({
      name: name.trim(),
      rollNo: rollNo.trim(),
      class: studentClass.trim(),
      marks: marksNumeric,
    });
    resetForm();
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="marks-grid">
            <div>
              <label>Student Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Roll No</label>
              <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
            </div>
          </div>
          <label>Class / Section</label>
          <input
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            placeholder="e.g. 10-A"
          />

          <h3 style={{ marginTop: 18 }}>Marks (out of 100)</h3>
          <div className="marks-grid">
            {SUBJECTS.map((sub) => (
              <div key={sub}>
                <label>{sub}</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={marks[sub]}
                  onChange={(e) => handleMarkChange(sub, e.target.value)}
                />
              </div>
            ))}
          </div>

          {formError && <p className="error-msg">{formError}</p>}
          <button className="btn" type="submit">
            Add Student
          </button>
        </form>
      </div>

      <div className="card">
        <h2>All Students ({students.length})</h2>
        {students.length === 0 && (
          <p className="empty">No students added yet.</p>
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
                  <th>Action</th>
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
                      <td className="actions">
                        <button
                          className="btn danger"
                          onClick={() => deleteStudent(s.id)}
                        >
                          Delete
                        </button>
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
