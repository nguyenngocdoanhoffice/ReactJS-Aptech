import React, { useEffect, useState } from 'react';
import api from '../api';

function CourseForm({ course, onSaved, onCancel }) {
  const [form, setForm] = useState(course || { name: '', description: '', price: '' });
  useEffect(() => setForm(course || { name: '', description: '', price: '' }), [course]);
  const save = async () => {
    try {
      if (!form.name) return alert('Name required');
      if (form.price !== '' && isNaN(Number(form.price))) return alert('Price must be number');
      if (form.id) {
        await api.put(`/courses/${form.id}`, { ...form, price: Number(form.price) });
      } else {
        await api.post('/courses', { ...form, price: Number(form.price) });
      }
      onSaved();
    } catch (e) {
      alert(e.response?.data?.message || 'Error');
    }
  };
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
      <div>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      </div>
      <div>
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      </div>
      <div>
        <input placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={save}>Save</button>{' '}
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [err, setErr] = useState(null);

  const fetch = async () => {
    setLoading(true); setErr(null);
    try {
      const res = await api.get('/courses');
      setCourses(res.data);
    } catch (e) { setErr('Failed to load'); }
    setLoading(false);
  };

  useEffect(() => { fetch(); }, []);

  const remove = async (c) => {
    try {
      const r = await api.get(`/students/course/${c.id}`);
      if (Array.isArray(r.data) && r.data.length > 0) return alert('Cannot delete course with students');
      await api.delete(`/courses/${c.id}`);
      fetch();
    } catch (e) {
      alert(e.response?.data?.message || 'Delete error');
    }
  };

  return (
    <div>
      <h2>Courses</h2>
      <div>
        <button onClick={() => setEditing({})}>Add Course</button>
      </div>
      {loading ? <div>Loading...</div> : err ? <div>{err}</div> : (
        <ul>
          {courses.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong> - {c.description} - ${c.price}
              {' '}<button onClick={() => setEditing(c)}>Edit</button>
              {' '}<button onClick={() => remove(c)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {editing && <CourseForm course={editing} onSaved={() => { setEditing(null); fetch(); }} onCancel={() => setEditing(null)} />}
    </div>
  );
}
