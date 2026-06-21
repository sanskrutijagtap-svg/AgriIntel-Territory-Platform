export default function StatCard({ icon, color, label, value, trend, trendUp }) {
  return (
    <div className="card stat-card">
      <div className="stat-icon" style={{ background: color }}>{icon}</div>
      <div>
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
        {trend && <div className={'stat-trend ' + (trendUp ? 'up' : 'down')}>{trendUp ? '▲' : '▼'} {trend} from last month</div>}
      </div>
    </div>
  )
}
