import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { farmers } from '../data/mockData'

const TABS = ['Overview', 'Visit History', 'Demands', 'Follow-ups', 'Photos']

export default function FarmerProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState('Overview')
  const farmer = farmers.find((f) => f.id === id) || farmers[0]

  return (
    <>
      <PageHeader title="Farmer Profile" action={<button className="btn btn-primary">Edit</button>} />
      <div className="page">
        <button className="back-link" onClick={() => navigate('/farmers')} style={{ background: 'none', border: 'none' }}>← Back to Farmers</button>

        <div className="grid grid-2">
          <div className="card">
            <div className="profile-header">
              <div className="profile-avatar-lg">{farmer.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</div>
              <div>
                <div className="section-title" style={{ fontSize: 15 }}>{farmer.name}</div>
                <div className="muted">📞 {farmer.phone}</div>
                <div className="muted">{farmer.village} · Member since {farmer.memberSince}</div>
              </div>
            </div>

            <div className="tabs">
              {TABS.map((t) => (
                <button key={t} className={'tab' + (tab === t ? ' active' : '')} onClick={() => setTab(t)} style={{ background: 'none', border: 'none' }}>{t}</button>
              ))}
            </div>

            {tab === 'Overview' && (
              <>
                <div className="grid grid-3" style={{ marginBottom: 16, gap: 10 }}>
                  <div><div className="muted">Last Visit</div><div>{farmer.lastVisit}</div></div>
                  <div><div className="muted">Total Visits</div><div>{farmer.totalVisits}</div></div>
                  <div><div className="muted">Pending Follow-ups</div><div>{farmer.pendingFollowUps}</div></div>
                </div>
                <div className="muted">Total Orders</div>
                <div style={{ fontWeight: 700, marginBottom: 16 }}>{farmer.totalOrders}</div>

                <div className="card-title">Recent Visits</div>
                {farmer.recentVisits.length === 0 && <p className="muted">No visits recorded yet.</p>}
                {farmer.recentVisits.map((v, i) => (
                  <div className="list-row" key={i}>
                    <span>{v.date} · {v.type}</span>
                    <span className="muted">{v.note}</span>
                  </div>
                ))}
                {farmer.recentVisits.length > 0 && (
                  <button className="btn btn-secondary" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>View All</button>
                )}
              </>
            )}
            {tab !== 'Overview' && <p className="muted">No {tab.toLowerCase()} recorded yet.</p>}
          </div>

          <div className="card">
            <div className="card-title">Farm Details</div>
            <div className="list-row"><span className="muted">Land Area</span><span>{farmer.landSize}</span></div>
            <div className="list-row"><span className="muted">Main Crop</span><span>{farmer.mainCrop}</span></div>
            <div className="list-row"><span className="muted">Irrigation</span><span>{farmer.irrigation}</span></div>
            <div className="list-row"><span className="muted">Soil Type</span><span>{farmer.soilType}</span></div>
            <div className="list-row"><span className="muted">Farming Type</span><span>{farmer.farmingType}</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
