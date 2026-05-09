import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [touched, setTouched] = useState({ email: false, password: false })
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        setTouched({ email: true, password: true })
        if (!validateEmail(email) || password.length < 5) return

        if (email === 'admin' && password === '123456') {
            localStorage.setItem('bai2_user', 'admin')
            navigate('/home')
            return
        }
        const raw = localStorage.getItem('bai2_registered_users')
        const users = raw ? JSON.parse(raw) : []
        const found = users.find(u => u.email === email && u.password === password)
        if (found) {
            localStorage.setItem('bai2_user', email)
            navigate('/home')
        } else {
            alert('Đăng nhập thất bại. Kiểm tra email/password')
        }
    }

    const emailValid = validateEmail(email)
    const passValid = password.length >= 5

    return (
        <div className="center-wrap">
            <div className="card auth">
                <h2>Login Form</h2>
                <form onSubmit={onSubmit}>
                    <label>Email</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onBlur={() => setTouched(t => ({ ...t, email: true }))}
                        className={touched.email ? (emailValid ? 'valid' : 'invalid') : ''}
                        placeholder="email@example.com"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onBlur={() => setTouched(t => ({ ...t, password: true }))}
                        className={touched.password ? (passValid ? 'valid' : 'invalid') : ''}
                    />
                    <button type="submit">Sign In</button>
                </form>
                <div style={{ marginTop: 10 }}>
                    <Link to="/register">REGISTER</Link>
                </div>
            </div>
        </div>
    )
}
