import "./StudentCard.css";

function StudentCard({ name, registerNo, department, year, cgpa, attendance, photo }) {
  // Task 6: conditional rendering for attendance eligibility
  const isAttendanceEligible = attendance >= 75;

  // Task 6: conditional rendering for placement eligibility
  const isPlacementEligible = cgpa >= 8;

  return (
    <section className="student-card" aria-label="Student details">
      <div className="student-card__stub">ID</div>

      <img className="student-card__photo" src={photo} alt={`Photo of ${name}`} />

      {/* Task 7: inline style - student name in blue */}
      <h2 className="student-card__name" style={{ color: "blue" }}>
        {name}
      </h2>

      <dl className="student-card__facts">
        <div className="student-card__row">
          <dt>Register No</dt>
          <dd className="mono">{registerNo}</dd>
        </div>
        <div className="student-card__row">
          <dt>Department</dt>
          <dd>{department}</dd>
        </div>
        <div className="student-card__row">
          <dt>Year</dt>
          <dd>{year}</dd>
        </div>
        <div className="student-card__row">
          {/* Task 7: inline style - CGPA in green */}
          <dt>CGPA</dt>
          <dd className="mono" style={{ color: "green" }}>
            {cgpa}
          </dd>
        </div>
        <div className="student-card__row">
          {/* Task 7: inline style - Attendance in orange */}
          <dt>Attendance</dt>
          <dd className="mono" style={{ color: "orange" }}>
            {attendance}%
          </dd>
        </div>
      </dl>

      <div className="student-card__statuses">
        <p className="status-line">
          Attendance Status :
          <span className={`stamp ${isAttendanceEligible ? "stamp--ok" : "stamp--no"}`}>
            {isAttendanceEligible ? "Eligible for Semester Exam" : "Not Eligible"}
          </span>
        </p>
        <p className="status-line">
          Placement Status :
          <span className={`stamp ${isPlacementEligible ? "stamp--ok" : "stamp--no"}`}>
            {isPlacementEligible ? "Eligible" : "Need Improvement"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default StudentCard;
