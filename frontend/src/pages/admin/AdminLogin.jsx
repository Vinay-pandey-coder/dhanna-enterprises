import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { adminLogin, adminToken } = useAuth()
  const navigate = useNavigate()

  // Already logged in — redirect
  if (adminToken) {
    navigate('/admin/dashboard')
    return null
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      const res = await axios.post(`${import.meta.env.VITE_API}/auth/admin/login`, form)
      adminLogin(res.data.token)
      navigate('/admin/dashboard')
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: '#0f2044'}}>
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2" style={{color: '#0f2044'}}>Admin Login</h2>
        <p className="text-sm text-gray-400 mb-6">Dhanna Enterprises</p>
        {message && <p className="mb-4 text-sm text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {['email', 'password'].map(field => (
            <input key={field} name={field}
              type={field === 'password' ? 'password' : 'text'}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]} onChange={handleChange} required
              disabled={loading}
              className="w-full border rounded-xl px-4 py-3 text-sm outline-none"
              style={{borderColor: '#e8e4dc', opacity: loading ? 0.6 : 1}}
            />
          ))}
          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-sm"
            style={{background: '#d4a017', color: '#050d1a', opacity: loading ? 0.7 : 1}}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}