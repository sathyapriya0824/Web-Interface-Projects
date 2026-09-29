# Student Dashboard Application

A React dashboard for a college that displays student details, subjects,
attendance, and placement eligibility.

## Components

- **App** — root component; holds sample data and composes the page.
- **Header** — shows the college name and "Student Dashboard" title.
- **StudentCard** — shows student name, register number, department, year,
  CGPA, attendance, and photo, all passed in via props. Inline styles color
  the name blue, CGPA green, and attendance orange. Conditional rendering
  shows attendance/placement eligibility as stamp-style badges.
- **SubjectList** — renders the `subjects` array as an unordered list.
- **Footer** — college name and copyright line.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
student-dashboard/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css          # design tokens + global styles (external CSS)
    ├── assets/
    │   └── student-photo.svg
    └── components/
        ├── Header.jsx / Header.css
        ├── StudentCard.jsx / StudentCard.css
        ├── SubjectList.jsx / SubjectList.css
        └── Footer.jsx / Footer.css
```

## Customizing

Edit the `student`, `subjects`, `semester`, and `year` values in
`src/App.jsx` to plug in real data. To connect real photos, replace the
`photo` prop with an image URL or an uploaded file's path.
