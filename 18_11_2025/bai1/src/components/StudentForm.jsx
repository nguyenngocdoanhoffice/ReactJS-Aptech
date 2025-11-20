import React, { useEffect, useState } from 'react'

export default function StudentForm({ onAdd, editing, onUpdate, onCancel }) {
    const initial = { name: '', dob: '', gender: 'Nam', subject: 'Toan', class: 'A' }
    const [form, setForm] = useState(initial)

    useEffect(() => {
        if (editing) setForm(editing)
        else setForm(initial)
    }, [editing])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name) return alert('Nhập tên')
        if (editing) onUpdate(form)
        else onAdd(form)
        setForm(initial)
    }

    return (
        <div className="card small">
            <h3>{editing ? 'Sửa sinh viên' : 'Thêm sinh viên'}</h3>
            <form onSubmit={handleSubmit}>
                <label>Tên sv:</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <label>Năm sinh:</label>
                <input type="date" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} />
                <label>Giới tính:</label>
                <div>
                    <label><input type="radio" checked={form.gender === 'Nam'} onChange={() => setForm({ ...form, gender: 'Nam' })} /> Nam</label>
                    <label style={{ marginLeft: 10 }}><input type="radio" checked={form.gender === 'Nu'} onChange={() => setForm({ ...form, gender: 'Nu' })} /> Nữ</label>
                </div>
                <label>Môn học:</label>
                <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                    <option>Toan</option>
                    <option>Ly</option>
                    <option>Hoa</option>
                </select>
                <label>Lớp:</label>
                <input value={form.class} onChange={e => setForm({ ...form, class: e.target.value })} />
                <div style={{ marginTop: 10 }}>
                    <button type="submit">{editing ? 'Cập nhật' : 'Thêm sinh viên'}</button>
                    {editing && <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>Hủy</button>}
                </div>
            </form>
        </div>
    )
}
