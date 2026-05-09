
import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/students")
      .then(res => setStudents(res.data));
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map(s => (
          <li key={s.id}>{s.fullName} - {s.email}</li>
        ))}
      </ul>
    </div>
  );
}
