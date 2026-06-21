export default function PageHeader({ title, subtitle, action }) {
  return (
    <div className="topbar">
      <div>
        <h1>{title}</h1>
        {subtitle && <div className="sub">{subtitle}</div>}
      </div>
      <div className="topbar-right">
        {action}
        <button className="icon-btn" aria-label="Notifications">
          🔔<span className="badge-dot"></span>
        </button>
      </div>
    </div>
  )
}
