import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: '📊', end: true },
  { to: '/visits', label: 'Visits', icon: '📍' },
  { to: '/farmers', label: 'Farmers', icon: '🌾' },
  { to: '/dealers', label: 'Dealers', icon: '🏪' },
  { to: '/villages', label: 'Villages', icon: '🏡' },
  { to: '/follow-ups', label: 'Follow-ups', icon: '⏰' },
  { to: '/products', label: 'Products', icon: '📦' },
  { to: '/analytics', label: 'Analytics', icon: '📈' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
]

export default function AppLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="leaf">🌿</span> AgriIntel
        </div>

        <NavLink to="/profile" className="sidebar-profile">
          <span className="avatar">{user?.avatar || 'U'}</span>
          <div>
            <div className="name">{user?.name}</div>
            <div className="role">{user?.role}</div>
          </div>
        </NavLink>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}
            >
              <span className="ico">{item.icon}</span> {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="sidebar-logout" onClick={handleLogout}>
          <span className="ico">🚪</span> Logout
        </button>
      </aside>

      <div className="main-area">
        <Outlet />
      </div>
    </div>
  )
}
