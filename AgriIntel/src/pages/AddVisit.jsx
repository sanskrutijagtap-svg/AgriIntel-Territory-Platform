import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { farmers } from '../data/mockData'

const TABS = ['Notes', 'Feedback', 'Demand', 'Competitor', 'Follow-up', 'Photos']

export default function AddVisit() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('Notes')
  const [form, setForm] = useState({
    contactType: 'Farmer', farmer: farmers[0].id, date: '', time: '', visitType: 'Field Visit',
    purpose: '', notes: '', keyPoints: '', officerNotes: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    // Mock save — wire this up to your API when the backend is ready.
    navigate('/visits')
  }

  return (
    <>
      <PageHeader title="Add Visit" />
      <div className="page">
        <button className="back-link" onClick={() => navigate('/visits')} style={{ background: 'none', border: 'none' }}>← Back</button>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-2">
            <div className="card">
              <div className="card-title">Select Contact</div>
              <div className="field">
                <label>Contact Type</label>
                <select value={form.contactType} onChange={(e) => setForm({ ...form, contactType: e.target.value })}>
                  <option>Farmer</option><option>Dealer</option><option>Retailer</option>
                </select>
              </div>
              <div className="field">
                <label>Farmer</label>
                <select value={form.farmer} onChange={(e) => setForm({ ...form, farmer: e.target.value })}>
                  {farmers.map((f) => <option key={f.id} value={f.id}>{f.name} ({f.village})</option>)}
                </select>
              </div>

              <div className="card-title" style={{ marginTop: 6 }}>Visit Information</div>
              <div className="field">
                <label>Date</label>
                <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div className="field">
                <label>Time</label>
                <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
              </div>
              <div className="field">
                <label>Visit Type</label>
                <select value={form.visitType} onChange={(e) => setForm({ ...form, visitType: e.target.value })}>
                  <option>Field Visit</option><option>Dealer Visit</option><option>Demonstration</option>
                </select>
              </div>
              <div className="field">
                <label>Purpose</label>
                <select value={form.purpose} onChange={(e) => setForm({ ...form, purpose: e.target.value })}>
                  <option value="">Select Purpose</option>
                  <option>Product Promotion</option><option>Demand Check</option><option>Feedback Collection</option><option>Demonstration</option>
                </select>
              </div>
            </div>

            <div className="card">
              <div className="tabs">
                {TABS.map((t) => (
                  <button key={t} type="button" className={'tab' + (tab === t ? ' active' : '')} onClick={() => setTab(t)} style={{ background: 'none', border: 'none' }}>{t}</button>
                ))}
              </div>
              {tab === 'Notes' && (
                <>
                  <div className="field">
                    <label>Notes</label>
                    <textarea placeholder="Write your notes..." value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Key Points</label>
                    <textarea placeholder="Enter key points..." value={form.keyPoints} onChange={(e) => setForm({ ...form, keyPoints: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Officer Notes</label>
                    <textarea placeholder="Additional notes..." value={form.officerNotes} onChange={(e) => setForm({ ...form, officerNotes: e.target.value })} />
                  </div>
                </>
              )}
              {tab !== 'Notes' && <p className="muted">{tab} fields can be added here.</p>}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 16, justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/visits')}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save Visit</button>
          </div>
        </form>
      </div>
    </>
  )
}
