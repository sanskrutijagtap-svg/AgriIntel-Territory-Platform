import PageHeader from '../components/PageHeader'

export default function Settings() {
  return (
    <>
      <PageHeader title="Settings" subtitle="App preferences" />
      <div className="page">
        <div className="card" style={{ maxWidth: 480 }}>
          <div className="field"><label>Language</label><select><option>English</option><option>Hindi</option><option>Marathi</option></select></div>
          <div className="field"><label>Notifications</label><select><option>All</option><option>Important only</option><option>Off</option></select></div>
          <button className="btn btn-primary">Save Settings</button>
        </div>
      </div>
    </>
  )
}
