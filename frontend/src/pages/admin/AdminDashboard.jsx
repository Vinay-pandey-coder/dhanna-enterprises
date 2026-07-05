import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const [users, setUsers] = useState([])
  const { adminToken, adminLogout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}admin/users`, {
          headers: { Authorization: `Bearer ${adminToken}` }
        })
        setUsers(res.data)
      } catch {
        adminLogout()
        navigate('/admin/login')
      }
    }
    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return
    await axios.delete(`${import.meta.env.VITE_API}admin/users/${id}`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    })
    setUsers(users.filter(u => u._id !== id))
  }

  return (
    <div className="min-h-screen p-8" style={{background: '#f8f7f4'}}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold" style={{color: '#0f2044'}}>Registered Users</h2>
          <button onClick={() => { adminLogout(); navigate('/admin/login') }}
            className="px-4 py-2 rounded-xl text-sm font-semibold"
            style={{background: '#0f2044', color: 'white'}}>
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead style={{background: '#0f2044', color: 'white'}}>
              <tr>
                {['Name', 'Email', 'Phone', 'Registered', 'Action'].map(h => (
                  <th key={h} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id} style={{background: i % 2 === 0 ? 'white' : '#f8f7f4'}}>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.phone}</td>
                  <td className="px-4 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleDelete(user._id)}
                      className="px-3 py-1 rounded-lg text-xs font-semibold"
                      style={{background: '#fee2e2', color: '#dc2626'}}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">No users yet</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-right">Total: {users.length} users</p>
      </div>
    </div>
  )
}