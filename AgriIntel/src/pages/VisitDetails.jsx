import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { visits } from '../data/mockData'

const TABS = ['Notes', 'Feedback', 'Demand', 'Competitor', 'Follow-up', 'Photos']

export default function VisitDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState('Notes')
  const visit = visits.find((v) => v.id === id) || visits[0]

  return (
    <>
      <PageHeader title="Visit Details" action={<button className="btn btn-primary">Edit Visit</button>} />
      <div className="page">
        <button className="back-link" onClick={() => navigate('/visits')} style={{ background: 'none', border: 'none' }}>← Back to Visits</button>

        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div className="profile-avatar-lg" style={{ width: 44, height: 44, fontSize: 16 }}>
                {visit.farmer.split(' ').map((w) => w[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div className="section-title" style={{ fontSize: 15 }}>{visit.farmer}</div>
                <div className="muted">{visit.village}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-4" style={{ marginTop: 18, gap: 12 }}>
            <div><div className="muted">Date</div><div>{visit.date}</div></div>
            <div><div className="muted">Time</div><div>{visit.time}</div></div>
            <div><div className="muted">Visit Type</div><div>{visit.type}</div></div>
            <div><div className="muted">Purpose</div><div>{visit.purpose}</div></div>
          </div>
        </div>

        <div className="card">
          <div className="tabs">
            {TABS.map((t) => (
              <button key={t} className={'tab' + (tab === t ? ' active' : '')} onClick={() => setTab(t)} style={{ background: 'none', border: 'none' }}>{t}</button>
            ))}
          </div>

          {tab === 'Notes' && (
            <>
              <div style={{ background: 'var(--green-50)', border: '1px solid var(--green-100)', borderRadius: 8, padding: 14, marginBottom: 16, fontSize: 13.5 }}>
                {visit.notes}
              </div>
              <div className="section-title" style={{ fontSize: 14 }}>Key Points</div>
              <ul style={{ fontSize: 13.5, lineHeight: 1.8, marginTop: 8 }}>
                {visit.keyPoints.map((k, i) => <li key={i}>{k}</li>)}
              </ul>
              <div className="section-title" style={{ fontSize: 14, marginTop: 16 }}>Observations</div>
              <p className="muted" style={{ fontSize: 13.5 }}>{visit.observations}</p>
              <div className="section-title" style={{ fontSize: 14 }}>Officer Notes</div>
              <p className="muted" style={{ fontSize: 13.5 }}>{visit.officerNotes}</p>
              <div className="section-title" style={{ fontSize: 14 }}>Next Follow-up</div>
              <p style={{ fontSize: 13.5 }}>{visit.nextFollowUp} <span className={'pill ' + visit.followUpStatus.toLowerCase()}>{visit.followUpStatus}</span></p>
            </>
          )}
          {tab !== 'Notes' && <p className="muted">No {tab.toLowerCase()} recorded for this visit yet.</p>}
        </div>
      </div>
    </>
  )
}
