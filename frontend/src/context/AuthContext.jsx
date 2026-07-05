import { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken'))

  const adminLogin = (token) => {
    localStorage.setItem('adminToken', token)
    setAdminToken(token)
  }

  const adminLogout = () => {
    localStorage.removeItem('adminToken')
    setAdminToken(null)
  }

  return (
    <AuthContext.Provider value={{ adminToken, adminLogin, adminLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)