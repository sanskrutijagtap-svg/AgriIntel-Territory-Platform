import PageHeader from '../components/PageHeader'
import { followUps } from '../data/mockData'

export default function FollowUps() {
  return (
    <>
      <PageHeader title="Follow-ups" subtitle="Pending and completed follow-up reminders" />
      <div className="page">
        <div className="card">
          <table>
            <thead><tr><th>Farmer</th><th>Village</th><th>Date</th><th>Reason</th><th>Status</th></tr></thead>
            <tbody>
              {followUps.map((f) => (
                <tr key={f.id}>
                  <td>{f.farmer}</td>
                  <td>{f.village}</td>
                  <td>{f.date}</td>
                  <td>{f.reason}</td>
                  <td><span className={'pill ' + f.status.toLowerCase()}>{f.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
