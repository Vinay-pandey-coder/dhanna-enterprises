import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL
const USERS_PER_PAGE = 10

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { adminToken, adminLogout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/admin/users`, {
          headers: { Authorization: `Bearer ${adminToken}` },
          timeout: 60000
        })
        setUsers(res.data)
      } catch (err) {
        if (err.response?.status === 401) {
          adminLogout()
          navigate('/admin/login')
        } else {
          setError('Could not load users. Please refresh.')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return
    try {
      await axios.delete(`${import.meta.env.VITE_API}/admin/users/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      })
      setUsers(users.filter(u => u._id !== id))
      // Reset to page 1 if current page becomes empty
      const newTotal = users.length - 1
      const newTotalPages = Math.ceil(newTotal / USERS_PER_PAGE)
      if (currentPage > newTotalPages) setCurrentPage(Math.max(1, newTotalPages))
    } catch {
      alert('Could not delete. Try again.')
    }
  }

  // Pagination
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE)
  const paginatedUsers = users.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  )

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSidebarOpen(false)
  }

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{color: '#d4a017'}}>Admin Panel</p>
        <h2 className="text-white font-bold text-sm">Dhanna Enterprises</h2>
      </div>

      <nav className="flex flex-col p-4 gap-2 flex-1">
        <button onClick={() => handleTabChange('users')}
          className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
          style={{
            background: activeTab === 'users' ? 'rgba(212,160,23,0.15)' : 'transparent',
            color: activeTab === 'users' ? '#d4a017' : 'rgba(255,255,255,0.7)',
            border: activeTab === 'users' ? '1px solid rgba(212,160,23,0.3)' : '1px solid transparent',
            cursor: 'pointer'
          }}>
          👤 Registered Users
        </button>
        <button onClick={() => handleTabChange('forms')}
          className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
          style={{
            background: activeTab === 'forms' ? 'rgba(212,160,23,0.15)' : 'transparent',
            color: activeTab === 'forms' ? '#d4a017' : 'rgba(255,255,255,0.7)',
            border: activeTab === 'forms' ? '1px solid rgba(212,160,23,0.3)' : '1px solid transparent',
            cursor: 'pointer'
          }}>
          📋 Google Form Responses
        </button>
      </nav>

      <div className="p-4 border-t" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
        <button onClick={() => { adminLogout(); navigate('/admin/login') }}
          className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold"
          style={{background: 'rgba(255,255,255,0.08)', color: 'white', border: 'none', cursor: 'pointer'}}>
          Logout
        </button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen flex" style={{background: '#f8f7f4'}}>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-56 min-h-screen flex-col shrink-0"
        style={{background: '#0f2044'}}>
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 flex flex-col"
            style={{background: '#0f2044'}}>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">

        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-40"
          style={{background: '#0f2044'}}>
          <button onClick={() => setSidebarOpen(true)}
            style={{color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px'}}>
            ☰
          </button>
          <span className="font-bold text-sm" style={{color: '#d4a017'}}>Admin Panel</span>
          <button onClick={() => { adminLogout(); navigate('/admin/login') }}
            className="text-xs px-3 py-1.5 rounded-lg"
            style={{background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', cursor: 'pointer'}}>
            Logout
          </button>
        </div>

        <div className="p-4 md:p-8">

          {/* Users Tab */}
          {activeTab === 'users' && (
            <>
              <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold" style={{color: '#0f2044'}}>Registered Users</h2>
                  <p className="text-gray-400 text-sm mt-1">Users who registered on the website</p>
                </div>
                <span className="text-sm font-semibold px-3 py-1 rounded-full"
                  style={{background: 'rgba(15,32,68,0.08)', color: '#0f2044'}}>
                  Total: {users.length}
                </span>
              </div>

              {loading && (
                <p className="text-center py-20 text-gray-400">
                  Loading... (may take up to 60s on first load)
                </p>
              )}
              {error && <p className="text-center py-10 text-red-500">{error}</p>}

              {!loading && !error && (
                <>
                  {/* Desktop Table */}
                  <div className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-sm mb-4">
                    <table className="w-full text-sm">
                      <thead style={{background: '#0f2044', color: 'white'}}>
                        <tr>
                          {['#', 'Name', 'Email', 'Phone', 'Registered', 'Action'].map(h => (
                            <th key={h} className="px-4 py-3 text-left">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedUsers.map((user, i) => (
                          <tr key={user._id} style={{background: i % 2 === 0 ? 'white' : '#f8f7f4'}}>
                            <td className="px-4 py-3 text-gray-400">
                              {(currentPage - 1) * USERS_PER_PAGE + i + 1}
                            </td>
                            <td className="px-4 py-3 font-medium">{user.name}</td>
                            <td className="px-4 py-3">{user.email}</td>
                            <td className="px-4 py-3">{user.phone}</td>
                            <td className="px-4 py-3">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-3">
                              <button onClick={() => handleDelete(user._id)}
                                className="px-3 py-1 rounded-lg text-xs font-semibold"
                                style={{background: '#fee2e2', color: '#dc2626', border: 'none', cursor: 'pointer'}}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {users.length === 0 && (
                          <tr>
                            <td colSpan="6" className="px-4 py-8 text-center text-gray-400">
                              No users yet
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-3 mb-4">
                    {paginatedUsers.map((user, i) => (
                      <div key={user._id} className="bg-white rounded-2xl p-4"
                        style={{border: '1px solid #e8e4dc'}}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-bold text-sm" style={{color: '#0f2044'}}>{user.name}</p>
                            <p className="text-xs text-gray-400">
                              #{(currentPage - 1) * USERS_PER_PAGE + i + 1}
                            </p>
                          </div>
                          <button onClick={() => handleDelete(user._id)}
                            className="px-3 py-1 rounded-lg text-xs font-semibold"
                            style={{background: '#fee2e2', color: '#dc2626', border: 'none', cursor: 'pointer'}}>
                            Delete
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">📧 {user.email}</p>
                        <p className="text-xs text-gray-500 mb-1">📞 {user.phone}</p>
                        <p className="text-xs text-gray-400">
                          🗓 {new Date(user.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                    {users.length === 0 && (
                      <p className="text-center py-8 text-gray-400">No users yet</p>
                    )}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <p className="text-xs text-gray-400">
                        Showing {(currentPage - 1) * USERS_PER_PAGE + 1} –{' '}
                        {Math.min(currentPage * USERS_PER_PAGE, users.length)} of {users.length} users
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                          style={{
                            background: currentPage === 1 ? '#e5e7eb' : '#0f2044',
                            color: currentPage === 1 ? '#9ca3af' : 'white',
                            border: 'none',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                          }}>
                          ← Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <button key={page}
                            onClick={() => setCurrentPage(page)}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                            style={{
                              background: currentPage === page ? '#d4a017' : 'white',
                              color: currentPage === page ? '#050d1a' : '#0f2044',
                              border: '1px solid #e8e4dc',
                              cursor: 'pointer'
                            }}>
                            {page}
                          </button>
                        ))}

                        <button
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                          style={{
                            background: currentPage === totalPages ? '#e5e7eb' : '#0f2044',
                            color: currentPage === totalPages ? '#9ca3af' : 'white',
                            border: 'none',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                          }}>
                          Next →
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* Google Form Tab */}
          {activeTab === 'forms' && (
            <>
              <div className="flex flex-wrap justify-between items-center mb-8 gap-3">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold" style={{color: '#0f2044'}}>
                    Google Form Responses
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">Client registration form submissions</p>
                </div>
                <a href={GOOGLE_SHEET_URL} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                  style={{background: '#0f2044', color: '#d4a017', textDecoration: 'none'}}>
                  📊 Open Google Sheet
                </a>
              </div>

              <div className="rounded-2xl p-8 md:p-10 text-center"
                style={{background: 'white', border: '1px solid #e8e4dc'}}>
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#0f2044'}}>
                  Google Form Responses
                </h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto text-sm">
                  All client registration form responses are stored in Google Sheets.
                  Click below to view all submissions.
                </p>
                <a href={GOOGLE_SHEET_URL} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm"
                  style={{background: '#0f2044', color: '#d4a017', textDecoration: 'none'}}>
                  📊 View All Responses in Google Sheet
                </a>
                <p className="text-xs text-gray-400 mt-4">Opens in a new tab</p>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}