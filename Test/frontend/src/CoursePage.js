
import { useEffect, useState } from "react";
import axios from "axios";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/courses")
      .then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.name} - {c.price}</li>
        ))}
      </ul>
    </div>
  );
}
