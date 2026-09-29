import "./SubjectList.css";

function SubjectList({ subjects }) {
  return (
    <section className="subject-card" aria-label="Enrolled subjects">
      <h3 className="subject-card__title">Subjects Enrolled</h3>
      <ul className="subject-list">
        {subjects.map((subject) => (
          <li className="subject-list__item" key={subject}>
            {subject}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SubjectList;
