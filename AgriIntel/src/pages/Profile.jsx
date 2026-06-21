import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, updateProfile, logout } = useAuth()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(user)

  function handleSave(e) {
    e.preventDefault()
    updateProfile(form)
    setEditing(false)
  }

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <PageHeader title="My Profile" subtitle="Manage your account details" />
      <div className="page">
        <div className="card" style={{ maxWidth: 560 }}>
          <div className="profile-header">
            <div className="profile-avatar-lg">{user.avatar}</div>
            <div>
              <div className="section-title">{user.name}</div>
              <div className="muted">{user.role} · {user.territory} Territory</div>
            </div>
          </div>

          {!editing ? (
            <>
              <div className="list-row"><span className="muted">Email</span><span>{user.email}</span></div>
              <div className="list-row"><span className="muted">Phone</span><span>{user.phone}</span></div>
              <div className="list-row"><span className="muted">Territory</span><span>{user.territory}</span></div>
              <div className="list-row"><span className="muted">Member Since</span><span>{user.joined}</span></div>

              <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                <button className="btn btn-primary" onClick={() => { setForm(user); setEditing(true) }}>Edit Profile</button>
                <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSave}>
              <div className="field">
                <label>Full Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="field">
                <label>Email</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="field">
                <label>Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="submit" className="btn btn-primary">Save Changes</button>
                <button type="button" className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
