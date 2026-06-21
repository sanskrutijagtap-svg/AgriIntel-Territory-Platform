import { createContext, useContext, useState } from 'react'
import { currentUser } from '../data/mockData'

const AuthContext = createContext(null)

// Mock credential store — swap this for a real API call when the backend is ready.
const MOCK_CREDENTIALS = {
  email: 'ramesh.kumar@agrintel.com',
  password: 'agrintel123',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem('agrintel_user')
    return saved ? JSON.parse(saved) : null
  })
  const [error, setError] = useState('')

  function login(email, password) {
    setError('')
    if (email.trim().toLowerCase() === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
      setUser(currentUser)
      sessionStorage.setItem('agrintel_user', JSON.stringify(currentUser))
      return true
    }
    setError('Invalid email or password. Try ramesh.kumar@agrintel.com / agrintel123')
    return false
  }

  function logout() {
    setUser(null)
    sessionStorage.removeItem('agrintel_user')
  }

  function updateProfile(updates) {
    setUser((prev) => {
      const next = { ...prev, ...updates }
      sessionStorage.setItem('agrintel_user', JSON.stringify(next))
      return next
    })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
