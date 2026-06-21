import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import { summary, villageVisits, demandTrend, topComplaints, followUpStatusSplit } from '../data/mockData'

const PIE_COLORS = ['#2e9e57', '#3b78c2', '#8b5fbf', '#e8993b', '#d65a5a']
const STATUS_COLORS = { Pending: '#e8993b', Completed: '#2e9e57', Overdue: '#d65a5a' }

export default function Analytics() {
  return (
    <>
      <PageHeader title="Analytics" subtitle="Territory performance & trends" />
      <div className="page">
        <div className="grid grid-4" style={{ marginBottom: 16 }}>
          <StatCard icon="📍" color="#2e9e57" label="Total Visits" value={summary.totalVisits} trend={summary.visitsGrowth} trendUp />
          <StatCard icon="🌾" color="#3b78c2" label="Total Farmers" value={summary.totalFarmers} trend={summary.farmersGrowth} trendUp />
          <StatCard icon="🏪" color="#8b5fbf" label="Total Dealers" value={summary.totalDealers} trend={summary.dealersGrowth} trendUp />
          <StatCard icon="⏰" color="#e8993b" label="Pending Follow-ups" value={summary.pendingFollowUps} trend={summary.followUpsGrowth} trendUp={false} />
        </div>

        <div className="grid grid-2" style={{ marginBottom: 16 }}>
          <div className="card">
            <div className="card-title">Visits by Village</div>
            <ResponsiveContainer width="100%" height={230}>
              <PieChart>
                <Pie data={villageVisits} dataKey="visits" nameKey="village" innerRadius={55} outerRadius={85} paddingAngle={2}>
                  {villageVisits.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip /><Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-title">Demand Trend</div>
            <ResponsiveContainer width="100%" height={230}>
              <LineChart data={demandTrend}>
                <CartesianGrid stroke="#e6ebe8" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9fb0a6" />
                <YAxis tick={{ fontSize: 11 }} stroke="#9fb0a6" />
                <Tooltip /><Legend />
                <Line type="monotone" dataKey="ProductA" stroke="#3b78c2" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="ProductB" stroke="#e8993b" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="ProductC" stroke="#2e9e57" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <div className="card-title">Top Complaints</div>
            {topComplaints.map((c) => (
              <div className="bar-row" key={c.reason}>
                <span className="label">{c.reason}</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${(c.count / 12) * 100}%`, background: '#d65a5a' }} /></div>
                <span className="count">{c.count}</span>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="card-title">Follow-up Status</div>
            <ResponsiveContainer width="100%" height={210}>
              <PieChart>
                <Pie data={followUpStatusSplit} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                  {followUpStatusSplit.map((s, i) => <Cell key={i} fill={STATUS_COLORS[s.name]} />)}
                </Pie>
                <Tooltip /><Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}
