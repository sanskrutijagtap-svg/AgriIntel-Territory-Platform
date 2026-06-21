import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { farmers } from '../data/mockData'

export default function Farmers() {
  const navigate = useNavigate()
  return (
    <>
      <PageHeader title="Farmers" subtitle="All farmer profiles in your territory" />
      <div className="page">
        <div className="card">
          <table>
            <thead>
              <tr><th>Name</th><th>Village</th><th>Main Crop</th><th>Land Size</th><th>Last Visit</th><th></th></tr>
            </thead>
            <tbody>
              {farmers.map((f) => (
                <tr key={f.id} onClick={() => navigate(`/farmers/${f.id}`)} style={{ cursor: 'pointer' }}>
                  <td>{f.name}</td>
                  <td>{f.village}</td>
                  <td>{f.mainCrop}</td>
                  <td>{f.landSize}</td>
                  <td>{f.lastVisit}</td>
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
