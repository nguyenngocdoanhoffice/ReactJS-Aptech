import React, { useState } from 'react';
import CoursePage from './pages/CoursePage';
import StudentPage from './pages/StudentPage';

export default function App() {
  const [view, setView] = useState('courses');
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <header style={{ marginBottom: 20 }}>
        <button onClick={() => setView('courses')}>Courses</button>{' '}
        <button onClick={() => setView('students')}>Students</button>
      </header>
      <main>{view === 'courses' ? <CoursePage /> : <StudentPage />}</main>
    </div>
  );
}
