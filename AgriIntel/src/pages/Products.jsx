import PageHeader from '../components/PageHeader'
import { products, competitors } from '../data/mockData'

export default function Products() {
  return (
    <>
      <PageHeader title="Products & Competitors" subtitle="Demand, feedback and competitor intelligence" />
      <div className="page">
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title">Products</div>
          <table>
            <thead><tr><th>Product</th><th>Category</th><th>Demand Mentions</th><th>Complaints</th></tr></thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td><td>{p.category}</td><td>{p.demandMentions}</td><td>{p.complaints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-title">Competitor Intelligence</div>
          <table>
            <thead><tr><th>Competitor</th><th>Product</th><th>Observation</th><th>Village</th></tr></thead>
            <tbody>
              {competitors.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td><td>{c.product}</td><td>{c.observation}</td><td>{c.village}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
