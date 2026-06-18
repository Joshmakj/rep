import React from 'react'

const cards = [
  { icon: "📹", title: "Live Video Reception", desc: "HD video calls so every visitor speaks to a real, trained professional." },
  { icon: "🕐", title: "24/7 Availability", desc: "Morning, evening, weekends — we cover any shift you need." },
  { icon: "💼", title: "Fully Trained Staff", desc: "Assistants briefed on your brand, protocols, and visitor flow." },
  { icon: "💰", title: "Fixed Monthly Cost", desc: "No recruitment, no HR overhead — one predictable monthly fee." },
]

const FrontDeskCard = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">What We Offer</h2>
      <div className="row g-4">
        {cards.map((card, i) => (
          <div className="col-md-3 col-sm-6" key={i}>
            <div className="card h-100 text-center p-4 shadow-sm border-0">
              <div style={{ fontSize: "2.5rem" }}>{card.icon}</div>
              <h5 className="fw-bold mt-3">{card.title}</h5>
              <p className="text-muted">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FrontDeskCard
