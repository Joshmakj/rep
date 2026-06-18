import React from "react";
import "../components/Componetcss/ImplementationTeam.css";

const features = [
     { text: "Hands-on Implementation & Onboarding Support", icon: "bi-tools" },
   
    { text: "Certified Hubspot Consultants on Contractual Basis", icon: "bi-briefcase-fill" },
       { text: "Expertise & Best Practices to unleash the full potential of HubSpot", icon: "bi-bar-chart-line-fill" },

  { text: "Quick & Efficient Setup from initial installation to data migration and 3rd party integrations", icon: "bi-lightning-fill" },
  { text: "Personalized user training on how to use HubSpot features and manage content effectively", icon: "bi-mortarboard-fill" },
      { text: "Customized configuration to ensure HubSpot aligns with business processes & workflows", icon: "bi-gear-fill" },


];

const ImplementationTeam = () => {
  return (
    <section className="hubspot-team-section mb-5">
      <div className="container">
        <h4 className="hubspot-team-title"> Hubspot Implementation Team</h4>
        <h4 className="hubspot-team-subtitle">Sales, Marketing, Services, CMS & Operations Hubs</h4>

        <div className="hubspot-cards-wrapper">
          {features.map((feature, idx) => (
            <div key={idx} className="hubspot-card">
              <span className={`hubspot-card-icon icon-${idx}`}>
                <i className={`bi ${feature.icon}`}></i>
              </span>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationTeam;
