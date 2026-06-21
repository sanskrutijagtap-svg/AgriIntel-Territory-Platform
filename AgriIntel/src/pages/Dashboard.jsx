import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import { summary, villageVisits, products, topComplaints, recentActivities, visitTrend } from '../data/mockData'

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard" subtitle="Overview of your territory activities" />
      <div className="page">
        <div className="grid grid-4" style={{ marginBottom: 16 }}>
          <StatCard icon="📍" color="#2e9e57" label="Total Visits" value={summary.totalVisits} trend={summary.visitsGrowth} trendUp />
          <StatCard icon="🌾" color="#3b78c2" label="Farmers" value={summary.totalFarmers} trend={summary.farmersGrowth} trendUp />
          <StatCard icon="🏪" color="#8b5fbf" label="Dealers" value={summary.totalDealers} trend={summary.dealersGrowth} trendUp />
          <StatCard icon="⏰" color="#e8993b" label="Pending Follow-ups" value={summary.pendingFollowUps} trend={summary.followUpsGrowth} trendUp={false} />
        </div>

        <div className="grid grid-2" style={{ marginBottom: 16 }}>
          <div className="card">
            <div className="card-title">Visit Trend <span className="muted">This Month</span></div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={visitTrend}>
                <CartesianGrid stroke="#e6ebe8" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} stroke="#9fb0a6" />
                <YAxis tick={{ fontSize: 11 }} stroke="#9fb0a6" />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#2e9e57" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-title">Top Villages by Visits</div>
            {villageVisits.map((v) => (
              <div className="bar-row" key={v.village}>
                <span className="label">{v.village}</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${(v.visits / 28) * 100}%` }} /></div>
                <span className="count">{v.visits}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-3">
          <div className="card">
            <div className="card-title">Top Demands</div>
            {products.map((p) => (
              <div className="bar-row" key={p.id}>
                <span className="label">{p.name}</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${(p.demandMentions / 45) * 100}%` }} /></div>
                <span className="count">{p.demandMentions}</span>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="card-title">Top Complaints</div>
            {topComplaints.map((c) => (
              <div className="list-row" key={c.reason}>
                <span>{c.reason}</span>
                <span className="muted">{c.count} mentions</span>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="card-title">Recent Activities</div>
            {recentActivities.map((a, i) => (
              <div className="activity-row" key={i}>
                <span className="activity-dot" />
                <div>
                  <div>{a.text}</div>
                  <div className="activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
