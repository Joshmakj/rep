import { useEffect } from "react";
import "../components/Componetcss/OnBoard.css";

const OnBoard = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".onboard-fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200); // stagger animation
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-stretch">
        <h3 className="text-center card-tittle mb-4">On-Boarding Plan</h3>
        {[
        { text: "Project Kick Off Call" },
          { text: "Hands-on Implementation,Integration & Data Migration" },
          { text: "Workflow & AutoMation Set-up" },
          { text: "Testing & Training" },
        ].map((item, idx) => (
          <div className="col-md-3 mb-4 d-flex" key={idx}>
            <div className="onboard-card onboard-fade-in flex-fill">
              <p className="onboard-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnBoard;
