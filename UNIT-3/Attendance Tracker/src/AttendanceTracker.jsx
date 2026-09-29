import React, { useState } from "react";
import "./AttendanceTracker.css";

// 20 Students
const initialStudents = [
  { id: 1, name: "Sathya Priya", rollNo: "CS001", status: null },
  { id: 2, name: "Dinesh Kumar", rollNo: "CS002", status: null },
  { id: 3, name: "Deepak Raj", rollNo: "CS003", status: null },
  { id: 4, name: "Deepasri", rollNo: "CS004", status: null },
  { id: 5, name: "Dharshan", rollNo: "CS005", status: null },
  { id: 6, name: "Janani R", rollNo: "CS006", status: null },
  { id: 7, name: "Shalini", rollNo: "CS007", status: null },
  { id: 8, name: "Agalya", rollNo: "CS008", status: null },
  { id: 9, name: "Harish", rollNo: "CS009", status: null },
  { id: 10, name: "Monika", rollNo: "CS010", status: null },
  { id: 11, name: "Ajith", rollNo: "CS011", status: null },
  { id: 12, name: "Nandhini S", rollNo: "CS012", status: null },
  { id: 13, name: "Pradeepa", rollNo: "CS013", status: null },
  { id: 14, name: "Priya Dharshini", rollNo: "CS014", status: null },
  { id: 15, name: "Raja Harish", rollNo: "CS015", status: null },
  { id: 16, name: "Rithiga R", rollNo: "CS016", status: null },
  { id: 17, name: "Shyam Dharshan K", rollNo: "CS017", status: null },
  { id: 18, name: "Karthi", rollNo: "CS018", status: null },
  { id: 19, name: "Jeeva", rollNo: "CS019", status: null },
  { id: 20, name: "Rishoth Kumar P", rollNo: "CS020", status: null }
];


function AttendanceTracker() {

  // useState
  const [students, setStudents] = useState(initialStudents);


  // Mark Present / Absent
  function markAttendance(id, status) {

    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );

  }


  // Present Count
  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;


  // Absent Count
  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;


  // Total Students
  const totalStudents = students.length;


  // Not Marked Count
  const notMarkedCount =
    totalStudents - presentCount - absentCount;


  // Attendance Percentage
  const attendancePercentage =
    totalStudents === 0
      ? 0
      : Math.round((presentCount / totalStudents) * 100);


  // Reset Attendance
  function resetAttendance() {

    setStudents(
      initialStudents.map((student) => ({
        ...student,
        status: null
      }))
    );

  }


  return (

    <div className="attendance-page">

      <div className="attendance-container">


        {/* HEADER */}

        <div className="header">

          <div>

            <h1>📋 Attendance Tracker</h1>

            <p>
              Mark today's attendance for all students
            </p>

          </div>


          <button
            className="reset-btn"
            onClick={resetAttendance}
          >
            🔄 Reset
          </button>

        </div>


        {/* STUDENT LIST */}

        <div className="student-list">

          {students.map((student, index) => (

            <div
              className="student-card"
              key={student.id}
            >


              {/* Student Number */}

              <div className="student-number">
                {index + 1}
              </div>


              {/* Student Details */}

              <div className="student-info">

                <h3>
                  {student.name}
                </h3>

                <p>
                  Roll No: {student.rollNo}
                </p>

              </div>


              {/* STATUS */}

              <div className="status">

                {student.status === null ? (

                  <span className="not-marked">
                    ⚪ Not Marked
                  </span>

                ) : (

                  <span
                    className={
                      student.status === "Present"
                        ? "present-status"
                        : "absent-status"
                    }
                  >

                    {student.status === "Present"
                      ? "✅ Present"
                      : "❌ Absent"}

                  </span>

                )}

              </div>


              {/* PRESENT / ABSENT BUTTONS */}

              <div className="attendance-buttons">

                <button
                  className={
                    student.status === "Present"
                      ? "present active"
                      : "present"
                  }
                  onClick={() =>
                    markAttendance(
                      student.id,
                      "Present"
                    )
                  }
                >
                  ✓ Present
                </button>


                <button
                  className={
                    student.status === "Absent"
                      ? "absent active"
                      : "absent"
                  }
                  onClick={() =>
                    markAttendance(
                      student.id,
                      "Absent"
                    )
                  }
                >
                  ✕ Absent
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* SUMMARY */}

        <div className="summary">


          {/* Total */}

          <div className="summary-card">

            <span>👥</span>

            <div>

              <p>Total Students</p>

              <h2>
                {totalStudents}
              </h2>

            </div>

          </div>


          {/* Present */}

          <div className="summary-card present-summary">

            <span>✅</span>

            <div>

              <p>Present</p>

              <h2>
                {presentCount}
              </h2>

            </div>

          </div>


          {/* Absent */}

          <div className="summary-card absent-summary">

            <span>❌</span>

            <div>

              <p>Absent</p>

              <h2>
                {absentCount}
              </h2>

            </div>

          </div>


          {/* Not Marked */}

          <div className="summary-card">

            <span>⚪</span>

            <div>

              <p>Not Marked</p>

              <h2>
                {notMarkedCount}
              </h2>

            </div>

          </div>


          {/* Attendance Percentage */}

          <div className="summary-card attendance-summary">

            <span>📊</span>

            <div>

              <p>Attendance</p>

              <h2>
                {attendancePercentage}%
              </h2>

            </div>

          </div>

        </div>


        {/* PROGRESS BAR */}

        <div className="progress-section">

          <div className="progress-header">

            <span>
              Overall Attendance
            </span>

            <strong>
              {attendancePercentage}%
            </strong>

          </div>


          <div className="progress-track">

            <div
              className="progress-fill"
              style={{
                width: `${attendancePercentage}%`
              }}
            ></div>

          </div>

        </div>


        {/* CONDITIONAL MESSAGE */}

        <div className="message">

          {presentCount === totalStudents ? (

            <h3>
              🎉 All students are present!
            </h3>

          ) : presentCount > absentCount ? (

            <h3>
              👍 Majority of students are present.
            </h3>

          ) : (

            <h3>
              ⚠️ Attendance needs attention.
            </h3>

          )}

        </div>


      </div>

    </div>

  );
}


export default AttendanceTracker;