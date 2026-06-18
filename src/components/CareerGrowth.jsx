import React from "react";
import "../components/Componetcss/CareerGrowth.css";
import Profileimg from "../assets/JobseekerAssets/Jobpro.png";

const CareerGrowth = () => {
  const features = [
    { icon: "bi bi-compass", title: "Personalized Career Roadmap", description: "Get personalized guidance from our AI-powered career coach to help you grow from where you are today to where you want to be, whether you're just starting out or aiming for senior-level roles." },
    { icon: "bi bi-bar-chart-line", title: "Skill Gap Analysis", description: "Discover which skills you need to strengthen to qualify for higher-paying or more impactful roles in your target industry." },
    { icon: "bi bi-clock", title: "24/7 Career Guidance", description: "Ask questions about job transitions, salary negotiations, and professional development, anytime you need support." },
    { icon: "bi bi-chat-dots", title: "Interview Preparation", description: "Practice real-world interview scenarios for your target roles and receive actionable feedback to boost your confidence." },
  ];

  return (
    <div className="career-growth-container">
      <div className="career-header-section">
        <h1 className="career-main-title">Accelerate Your Career Growth</h1>
        <p className="career-sub-title">
          Get personalized guidance from our AI-powered career coach to help you grow from where you are today to where you want to be, whether you're just starting out or aiming for senior-level roles.
        </p>
      </div>

      <div className="career-content-wrapper">
        <div className="career-left-section">
          {features.map((feature, index) => (
            <div className="career-feature-item" key={index}>
              <div className="career-feature-icon">
                <i className={feature.icon}></i>
              </div>
              <div className="career-feature-content">
                <h3 className="career-feature-title">{feature.title}</h3>
                <p className="career-feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="career-right-section">
          <div className="career-coach-card">
            <div className="career-image-wrapper">
              <img src={Profileimg} alt="AI Career Coach" className="career-coach-image" />
            </div>
            <div className="career-coach-content">
              <h2 className="career-coach-name"> <span className="coach-falayn">Falayn</span>, Your AI Career Coach</h2>
              <p className="career-coach-title">Powered by advanced machine learning algorithms</p>

              <div className="career-coach-feature">
                <i className="bi bi-check-circle-fill"></i>
                <span>10+ years of industry experience</span>
              </div>
              <div className="career-coach-feature">
                <i className="bi bi-check-circle-fill"></i>
                <span>5000+ career paths analyzed</span>
              </div>
              <div className="career-coach-feature">
                <i className="bi bi-check-circle-fill"></i>
                <span>97% user satisfaction rate</span>
              </div>

              <button className="career-coach-button">Talk to Falayn Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGrowth;
