import React from 'react'

export default function StudentTable({ students, onEdit, onDelete }) {
    return (
        <div className="card">
            <h3>Danh sách sinh viên</h3>
            <table className="sv-table">
                <thead>
                    <tr>
                        <th>Tên</th><th>Lớp</th><th>Năm sinh</th><th>Giới tính</th><th>Môn học</th><th>Cập nhật</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s => (
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td>{s.class}</td>
                            <td>{s.dob}</td>
                            <td>{s.gender}</td>
                            <td>{s.subject}</td>
                            <td>
                                <button onClick={() => onEdit(s)}>Sửa</button>
                                <button onClick={() => onDelete(s.id)} style={{ marginLeft: 8 }}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                    {students.length === 0 && <tr><td colSpan={6}>Chưa có sinh viên</td></tr>}
                </tbody>
            </table>
        </div>
    )
}
