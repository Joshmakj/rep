import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Componetcss/InsideComponent.css";

const InsideComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const plans = [
    {
      title: "30-Days Plan",
      steps: [
        "Kick-off & GTM Strategy alignment",
        "Sales & CRM tools setup",
        "Discovery calls with target accounts",
        "Initial prospecting lists created",
      ],
    },
    {
      title: "60-Days Plan",
      steps: [
        "Consistent prospect outreach campaigns",
        "Sales automation workflows live",
        "Presentations & demos to qualified leads",
        "Early pipeline built & nurtured",
      ],
    },
    {
      title: "90-Days Plan",
      steps: [
        "Lead qualification and follow-ups",
        "Closing deals from active pipeline",
        "Optimized sales workflows",
        "Reporting & handover for sustained growth",
      ],
    },
  ];

  return (
    <div className="plan-container container my-5">
      <div className="row">
        {/* Left section */}
        <div className="plan-left col-lg-5 d-flex flex-column justify-content-center mb-4 mb-lg-0">
          <h3 className="plan-title">Inside Sales Program</h3>
          <p className="plan-description">
            Seasoned Inside Sales Experts on Contractual Roles at an all-inclusive
            package to quickly scale up revenues.
          </p>
        </div>

        {/* Right section */}
        <div className="plan-right col-lg-7 d-flex flex-column flex-md-row align-items-start">
          {/* Stepper */}
          <div className="plan-stepper d-flex flex-md-column align-items-center me-md-4 mb-4 mb-md-0">
            {plans.map((plan, index) => (
              <React.Fragment key={index}>
                <div className="plan-step-wrapper">
                  <button
                    className={`plan-btn btn ${
                      activeIndex === index ? "plan-btn-active animate-btn" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {plan.title.split(" ")[0]} {/* shows 30-Days / 60-Days / 90-Days */}
                  </button>
                </div>
                {index < plans.length - 1 && (
                  <div
                    className={`plan-line ${
                      activeIndex > index ? "plan-line-active" : ""
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Content */}
          <div className="plan-content-box flex-grow-1">
            <div className="plan-card">
              <h5 className="card-title">{plans[activeIndex].title}</h5>
              <ul className="card-list">
                {plans[activeIndex].steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideComponent;
