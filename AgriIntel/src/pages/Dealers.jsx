import PageHeader from '../components/PageHeader'
import { dealers } from '../data/mockData'

export default function Dealers() {
  return (
    <>
      <PageHeader title="Dealers & Retailers" subtitle="Influence and sales overview" />
      <div className="page">
        <div className="card">
          <table>
            <thead><tr><th>Name</th><th>Village</th><th>Influence</th><th>Sales</th></tr></thead>
            <tbody>
              {dealers.map((d) => (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.village}</td>
                  <td><span className={'pill ' + d.influence.toLowerCase()}>{d.influence}</span></td>
                  <td>{d.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
