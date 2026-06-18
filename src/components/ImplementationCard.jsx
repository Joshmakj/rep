import React from "react";
import "../components/Componetcss/ImplementationCard.css";

const ImplementationCard = () => {
  const models = [
    {
      title: "Fixed Price Model",
      points: [
        "Pre-determined project cost is agreed upon based on the scope of work, project requirements and deliverables",
        "Ideal to use when a well-defined project requirements are arrived",
        "Most suitable for projects with fixed budgets",
        "Price does not change regardless of the actual Time & Effort required to complete the work",
        "Project deliverables are managed by us",
        "Provides cost predictability",
        "Difficult to accommodate changes during development or implementation stage",
      ],
    },
    {
      title: "Time & Material Model",
      points: [
        "Resources are provided for pre-determined skill sets at time based billing for required time frame",
        "Ideal when scope of work isn’t fully defined and will be evolving frequently",
        "Most suitable for complex Large-Scale Projects",
        "Under a robust project management system client can ensure project stays on track and within budget",
        "Project deliverables managed by Client",
        "Provides control over the project scope",
        "Offers flexibility for changes due to changing markets, technology trends or business priorities",
      ],
    },
    {
      title: "Offshore Delivery Center",
      points: [
        "Dedicated Team with required skill sets provided under a standard all-inclusive Rate card as an Extended Team",
        "Ideal to use when an exclusive Team is required on diverse skill sets",
        "Most suitable for long term projects with greater cost effectiveness",
        "Offers significant cost savings by leveraging offshore Teams at a lower hourly/monthly Rate",
        "Project deliverables managed by Client",
        "Provides control over Team, Process & Practices just like an in house Team",
        "Offers scalability to quickly ramp up or ramp down Team based on needs",
      ],
    },
  ];

  return (
    <section className="implementation-section container py-5">
      <h2 className="text-center mb-5 implementation-title">Engagement Models</h2>
      <div className="row">
        {models.map((model, idx) => (
          <div className="col-md-4 mb-4 d-flex" key={idx}>
            <div className="implementation-card flex-fill">
              <h4 className="card-title">{model.title}</h4>
              <ul className="card-list">
                {model.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImplementationCard;
