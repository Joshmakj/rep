import React from 'react'

const benefits = [
  { icon: "🏢", title: "Professional Image", desc: "Impress every visitor with a polished, consistent reception experience." },
  { icon: "📉", title: "Reduce Costs by 60%", desc: "Eliminate salary, benefits, and office space costs of an on-site receptionist." },
  { icon: "🔒", title: "Secure & Compliant", desc: "Enterprise-grade encrypted video calls with visitor logging." },
  { icon: "📈", title: "Infinitely Scalable", desc: "Add locations or shift hours instantly — no new hires needed." },
  { icon: "🌍", title: "Multi-language Support", desc: "Assistants available in multiple languages to serve diverse visitors." },
  { icon: "⚡", title: "Quick Setup", desc: "Go live in under 48 hours — we handle training and onboarding." },
]

const FrontDeskBenefits = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Why Choose Teamup's Remote Front Desk?</h2>
      <div className="row g-4">
        {benefits.map((b, i) => (
          <div className="col-md-4 col-sm-6" key={i}>
            <div className="d-flex gap-3 align-items-start p-3">
              <div style={{ fontSize: "2rem" }}>{b.icon}</div>
              <div>
                <h6 className="fw-bold mb-1">{b.title}</h6>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{b.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FrontDeskBenefits
