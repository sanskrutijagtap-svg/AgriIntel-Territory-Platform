import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { visits } from '../data/mockData'

export default function Visits() {
  const navigate = useNavigate()
  return (
    <>
      <PageHeader
        title="Visits"
        subtitle="All recorded field visits"
        action={<button className="btn btn-primary" onClick={() => navigate('/visits/add')}>+ Add Visit</button>}
      />
      <div className="page">
        <div className="card">
          <table>
            <thead>
              <tr><th>Contact</th><th>Village</th><th>Type</th><th>Date</th><th>Follow-up</th><th></th></tr>
            </thead>
            <tbody>
              {visits.map((v) => (
                <tr key={v.id} onClick={() => navigate(`/visits/${v.id}`)} style={{ cursor: 'pointer' }}>
                  <td>{v.farmer}</td>
                  <td>{v.village}</td>
                  <td>{v.type}</td>
                  <td>{v.date} · {v.time}</td>
                  <td><span className={'pill ' + v.followUpStatus.toLowerCase()}>{v.followUpStatus}</span></td>
                  <td className="muted">View →</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
