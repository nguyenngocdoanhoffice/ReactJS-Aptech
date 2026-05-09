import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const user = localStorage.getItem('bai2_user')

    const logout = () => {
        localStorage.removeItem('bai2_user')
        navigate('/login')
    }

    return (
        <div style={{ padding: 20 }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Welcome {user}</h1>
                <button onClick={logout}>Logout</button>
            </header>
            <p>Đây là trang index/hello world của người dùng.</p>
        </div>
    )
}
