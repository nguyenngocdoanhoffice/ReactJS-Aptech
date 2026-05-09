import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        if (!validateEmail(email)) { setErr('Email không hợp lệ'); return }
        if (password.length < 5) { setErr('Password tối thiểu 5 ký tự'); return }

        const raw = localStorage.getItem('bai2_registered_users')
        const users = raw ? JSON.parse(raw) : []
        if (users.find(u => u.email === email)) { setErr('Email đã đăng ký'); return }
        users.push({ email, password })
        localStorage.setItem('bai2_registered_users', JSON.stringify(users))
        alert('Đăng ký thành công. Vui lòng đăng nhập')
        navigate('/login')
    }

    return (
        <div className="center-wrap">
            <div className="card auth">
                <h2>Register</h2>
                <form onSubmit={onSubmit}>
                    <label>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {err && <div className="err">{err}</div>}
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}
