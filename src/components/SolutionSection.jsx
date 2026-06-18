import { useEffect } from "react";
import "../components/Componetcss/SolutionSection.css";

const SolutionSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".solution-fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      title: "Demand Generation",
      text: "Multi-channel outreach (Email, LinkedIn, Calls).",
    },
    {
      title: "CRM Setup & Automation",
      text: "HubSpot / Pipedrive / Zoho integrated workflows.",
    },
    {
      title: "Sales Pipeline Management",
      text: "From prospecting to closure.",
    },
    {
      title: "SDR-as-a-Service",
      text: "Dedicated sales reps driving meetings for you.",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="title-text mb-4 text-center"> What you get?</h2>
      <div className="row d-flex align-items-stretch">
        {solutions.map((item, idx) => (
          <div className="col-md-3 mb-4 d-flex" key={idx}>
            <div className="solution-card solution-fade-in flex-fill">
              <h5 className="solution-title">{item.title}</h5>
              <p className="solution-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
