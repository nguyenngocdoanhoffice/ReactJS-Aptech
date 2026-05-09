import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentForm from '../components/StudentForm.jsx'
import StudentTable from '../components/StudentTable.jsx'

const STORAGE_KEY = 'bai1_students'

export default function ListSV() {
    const navigate = useNavigate()
    const [students, setStudents] = useState([])
    const [editing, setEditing] = useState(null)

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) setStudents(JSON.parse(raw))
        else {
            const sample = [
                { id: 1, name: 'Nguyen Van A', dob: '2001-10-20', gender: 'Nam', subject: 'Toan', class: 'A' },
                { id: 2, name: 'Nguyen Van B', dob: '2004-04-21', gender: 'Nu', subject: 'Ly', class: 'B' },
            ]
            setStudents(sample)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sample))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
    }, [students])

    const addStudent = (s) => {
        const id = students.length ? Math.max(...students.map(x => x.id)) + 1 : 1
        setStudents([...students, { ...s, id }])
    }

    const updateStudent = (updated) => {
        setStudents(students.map(s => s.id === updated.id ? updated : s))
        setEditing(null)
    }

    const removeStudent = (id) => {
        if (!confirm('Bạn có muốn xóa?')) return
        setStudents(students.filter(s => s.id !== id))
    }

    const logout = () => {
        localStorage.removeItem('bai1_logged')
        navigate('/login')
    }

    return (
        <div className="page">
            <header className="page-header">
                <h1>Quản lý SV</h1>
                <button onClick={logout}>Logout</button>
            </header>
            <main>
                <section className="left">
                    <StudentForm onAdd={addStudent} onUpdate={updateStudent} editing={editing} onCancel={() => setEditing(null)} />
                </section>
                <section className="right">
                    <StudentTable students={students} onEdit={setEditing} onDelete={removeStudent} />
                </section>
            </main>
        </div>
    )
}
