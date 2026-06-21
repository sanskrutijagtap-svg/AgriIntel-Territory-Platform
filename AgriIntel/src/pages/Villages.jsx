import PageHeader from '../components/PageHeader'
import { villages } from '../data/mockData'

export default function Villages() {
  return (
    <>
      <PageHeader title="Villages" subtitle="Territory knowledge base" />
      <div className="page">
        <div className="grid grid-3">
          {villages.map((v) => (
            <div className="card" key={v.id}>
              <div className="card-title">{v.name}</div>
              <div className="list-row"><span className="muted">Main Crop</span><span>{v.mainCrop}</span></div>
              <div className="list-row"><span className="muted">Farmers</span><span>{v.farmers}</span></div>
              <div className="list-row"><span className="muted">Visits</span><span>{v.visits}</span></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
