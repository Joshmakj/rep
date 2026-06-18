import React from 'react'

const steps = [
  { step: "01", title: "Visitor Arrives", desc: "Guest approaches the front desk screen or kiosk at your location." },
  { step: "02", title: "One-Tap Connect", desc: "They tap to connect — a live HD video call starts within seconds." },
  { step: "03", title: "Professional Welcome", desc: "A trained remote assistant greets them, verifies identity, and notifies the host." },
  { step: "04", title: "Seamlessly Directed", desc: "Visitor is guided to their destination or waiting area with zero friction." },
]

const FrontDeskFeatures = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">How It Works</h2>
      <div className="row g-4">
        {steps.map((s, i) => (
          <div className="col-md-3 col-sm-6" key={i}>
            <div className="text-center p-3">
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "#4f46e5" }}>{s.step}</div>
              <h5 className="fw-bold mt-2">{s.title}</h5>
              <p className="text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FrontDeskFeatures
