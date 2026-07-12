import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      const res = await axios.post(`${import.meta.env.VITE_API}/auth/register`, form)
      setMessage(res.data.message)
      setTimeout(() => navigate('/login'), 1500)
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: '#f8f7f4'}}>
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6" style={{color: '#0f2044'}}>Register</h2>
        {message && (
          <p className="mb-4 text-sm" style={{color: message.includes('wrong') || message.includes('exists') ? '#dc2626' : '#16a34a'}}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'password', 'phone'].map(field => (
            <input key={field}
              name={field}
              type={field === 'password' ? 'password' : 'text'}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full border rounded-xl px-4 py-3 text-sm outline-none"
              style={{borderColor: '#e8e4dc', opacity: loading ? 0.6 : 1}}
            />
          ))}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-sm transition-opacity"
            style={{background: '#0f2044', color: 'white', opacity: loading ? 0.7 : 1}}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account? <a href="/login" style={{color: '#007B2B'}}>Login</a>
        </p>
      </div>
    </div>
  )
}