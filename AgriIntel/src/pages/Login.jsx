import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, error, user } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('ramesh.kumar@agrintel.com')
  const [password, setPassword] = useState('agrintel123')

  if (user) return <Navigate to="/" replace />

  function handleSubmit(e) {
    e.preventDefault()
    if (login(email, password)) navigate('/', { replace: true })
  }

  return (
    <div className="login-shell">
      <div className="login-card">
        <div className="login-brand">🌿 AgriIntel</div>
        <div className="login-sub">Territory Intelligence & Field Activity Platform</div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '11px' }}>
            Log In
          </button>
        </form>

        <div className="login-hint">Demo login — ramesh.kumar@agrintel.com / agrintel123</div>
      </div>
    </div>
  )
}
