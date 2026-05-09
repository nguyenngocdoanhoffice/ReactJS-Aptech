import React, { useEffect, useState } from 'react';
import api from '../api';

function StudentForm({ student, courses, onSaved, onCancel }) {
  const [form, setForm] = useState(student || { fullName: '', email: '', age: '', courseId: '' });
  useEffect(() => setForm(student || { fullName: '', email: '', age: '', courseId: '' }), [student]);

  const validEmail = (s) => /\S+@\S+\.\S+/.test(s);
  const save = async () => {
    if (!form.fullName) return alert('Name required');
    if (!validEmail(form.email)) return alert('Email invalid');
    if (!form.age || Number(form.age) <= 16) return alert('Age must be > 16');
    if (!form.courseId) return alert('Choose course');
    try {
      const payload = { fullName: form.fullName, email: form.email, age: Number(form.age), course: { id: Number(form.courseId) } };
      if (form.id) await api.put(`/students/${form.id}`, payload);
      else await api.post('/students', payload);
      onSaved();
    } catch (e) {
      alert(e.response?.data?.message || 'Error');
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 10, marginTop: 10 }}>
      <div><input placeholder="Full name" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} /></div>
      <div><input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
      <div><input placeholder="Age" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} /></div>
      <div>
        <select value={form.courseId} onChange={e => setForm({ ...form, courseId: e.target.value })}>
          <option value="">--Choose course--</option>
          {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={save}>Save</button>{' '}<button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default function StudentPage() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterCourse, setFilterCourse] = useState('');
  const [editing, setEditing] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const [sRes, cRes] = await Promise.all([api.get('/students'), api.get('/courses')]);
      setStudents(sRes.data);
      setCourses(cRes.data);
    } catch {
      alert('Load error');
    }
    setLoading(false);
  };

  useEffect(() => { fetch(); }, []);

  const remove = async (st) => {
    if (!confirm('Delete student?')) return;
    try {
      await api.delete(`/students/${st.id}`);
      fetch();
    } catch {
      alert('Delete failed');
    }
  };

  const filtered = filterCourse ? students.filter(s => s.course && s.course.id === Number(filterCourse)) : students;

  return (
    <div>
      <h2>Students</h2>
      <div>
        <button onClick={() => setEditing({})}>Add Student</button>
        <select value={filterCourse} onChange={e => setFilterCourse(e.target.value)} style={{ marginLeft: 8 }}>
          <option value="">--All courses--</option>
          {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>
      {loading ? <div>Loading...</div> : (
        <table border="1" cellPadding="6" style={{ marginTop: 8 }}>
          <thead><tr><th>Name</th><th>Email</th><th>Age</th><th>Course</th><th>Actions</th></tr></thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id}>
                <td>{s.fullName}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>
                <td>{s.course?.name || ''}</td>
                <td>
                  <button onClick={() => setEditing(s)}>Edit</button>{' '}
                  <button onClick={() => remove(s)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editing && <StudentForm student={editing} courses={courses} onSaved={() => { setEditing(null); fetch(); }} onCancel={() => setEditing(null)} />}
    </div>
  );
}
