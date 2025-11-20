import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import ListSV from './pages/ListSV.jsx'

function App() {
  const isLogged = !!localStorage.getItem('bai1_logged')

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isLogged ? '/list' : '/login'} replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list" element={isLogged ? <ListSV /> : <Navigate to="/login" replace />} />
      <Route path="*" element={<div style={{ padding: 20 }}>404 - Not found</div>} />
    </Routes>
  )
}

export default App
