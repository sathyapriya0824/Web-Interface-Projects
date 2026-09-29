import "./App.css";
import Header from "./Header";
import StudentCard from "./StudentCard";
import SubjectList from "./SubjectList";
import Footer from "./Footer";

function App() {

  const subjects = ["React","Java","Python","SQL","DBMS"];

  const semester = 3;
  const year = "Second Year";

  return (
    <div>

      <Header />

      <StudentCard
        name="Suji"
        regno="101"
        dept="CSE"
        year="III"
        cgpa={8.5}
        attendance={82}
        photo="https://via.placeholder.com/150"
      />

      <SubjectList
        subjects={subjects}
        semester={semester}
        currentYear={year}
      />

      <Footer />

    </div>
  );
}

export default App;