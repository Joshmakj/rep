import React from 'react'

const rows = [
  { feature: "Available 24/7",          remote: "✅", inhouse: "❌", automated: "✅" },
  { feature: "Human interaction",        remote: "✅", inhouse: "✅", automated: "❌" },
  { feature: "Fixed monthly cost",       remote: "✅", inhouse: "❌", automated: "✅" },
  { feature: "Multi-language support",   remote: "✅", inhouse: "⚠️", automated: "⚠️" },
  { feature: "No hardware/setup cost",   remote: "✅", inhouse: "✅", automated: "❌" },
  { feature: "Scalable to multi-site",   remote: "✅", inhouse: "❌", automated: "⚠️" },
  { feature: "Visitor logging & reports",remote: "✅", inhouse: "⚠️", automated: "✅" },
]

const FrontDeskTable = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">How We Compare</h2>
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th className="text-start">Feature</th>
              <th>Teamup Remote</th>
              <th>In-house Receptionist</th>
              <th>Automated Kiosk</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="text-start fw-semibold">{row.feature}</td>
                <td style={{ color: "#4f46e5", fontWeight: "600" }}>{row.remote}</td>
                <td>{row.inhouse}</td>
                <td>{row.automated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FrontDeskTable
