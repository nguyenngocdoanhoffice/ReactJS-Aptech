import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const validUser = {
            username: "admin",
            password: "123456"
        }
        if (!username || !password) {
            setErr('Vui lòng nhập username và password')
            return
        }

        if (username !== validUser.username || password !== validUser.password) {
            setErr('Sai tài khoản hoặc mật khẩu')
            return
        }
        localStorage.setItem('bai1_logged', '1')
        navigate('/list')
    }

    return (
        <div className="center-wrap">
            <div className="card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} />

                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    {err && <div className="err">{err}</div>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
