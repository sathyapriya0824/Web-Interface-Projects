import React, { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();
export const SUBJECTS = ["Tamil", "English", "Maths", "Science", "Social"];
const STORAGE_KEY = "unit5_students_list";

export function useStudents() {
  return useContext(StudentContext);
}

export function calcResult(marks) {
  const total = SUBJECTS.reduce((sum, sub) => sum + Number(marks[sub] || 0), 0);
  const maxTotal = SUBJECTS.length * 100;
  const percentage = ((total / maxTotal) * 100).toFixed(2);
  const failed = SUBJECTS.some((sub) => Number(marks[sub] || 0) < 35);

  let grade = "F";
  if (!failed) {
    if (percentage >= 90) grade = "A";
    else if (percentage >= 75) grade = "B";
    else if (percentage >= 35) grade = "C";
  }

  return { total, percentage, grade, failed };
}

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStudent = (id, updated) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updated } : s))
    );
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, deleteStudent, updateStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
}
