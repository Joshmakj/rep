import React from "react";
import { FaUsers, FaBullhorn, FaCogs, FaUserTie } from "react-icons/fa";
import "../components/Componetcss/PaintPoint.css";

const PaintPoints = () => {
  const painPoints = [
    {
      title: "Struggling to Generate Consistent Leads?",
      description: "Unlock a steady stream of high-quality leads with our data-driven strategies tailored to your business.",
      icon: <FaBullhorn className="paintpoints-icon" />,
    },
    {
      title: "Spending on Ads but No ROI?",
      description: "Turn ad spend into profits with optimized campaigns that target the right audience and boost conversions.",
      icon: <FaCogs className="paintpoints-icon" />,
    },
    {
      title: "No Structured Inside Sales Process?",
      description: "Implement a streamlined sales process to close deals faster and scale your business efficiently.",
      icon: <FaUsers className="paintpoints-icon" />,
    },
    {
      title: "Founders Doing All the Selling?",
      description: "Empower your team with expert training and systems, so you can focus on growing your business.",
      icon: <FaUserTie className="paintpoints-icon" />,
    },
  ];

  return (
    <section className="paintpoints-section">
      <div className="paintpoints-container">
        <div className="paintpoints-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="paintpoints-card">
              {point.icon}
              <h3 className="paintpoints-title">{point.title}</h3>
              <p className="paintpoints-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintPoints;
