import React, { useState, useEffect, useRef } from "react";
import "../components/Componetcss/HowItWorks.css";

import img1 from "../assets/JobseekerAssets/Cvreview.png";
import img2 from "../assets/JobseekerAssets/Jobinter.png";
import img3 from "../assets/JobseekerAssets/Netplan.png";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoInterval = useRef(null);
  const resumeTimer = useRef(null);

  const steps = [
    {
      title: "Be Ready, Position yourself to stand out",
      image: img1,
      points: [
        "AI-powered resume parsing & optimization",
        "Auto-generated cover letters tailored to each role",
        "Skill & intent mapping to align you with the right opportunities",
      ],
    },
    {
      title: "Get Matched, Discover the right jobs",
      image: img2,
      points: [
        "Role matching based on semantic skill analysis",
        "Personalized job recommendations that go beyond keywords",
        "Real-time updates when Hiring Managers/Recruiters engage with your profile",
      ],
    },
    {
      title: "Take Action, Connect Directly",
      image: img3,
      points: [
        "One-click outreach to recruiters & hiring managers",
        "AI-generated personalized emails & LinkedIn messages",
        "Application tracking dashboard to monitor views, replies & outcomes",
      ],
    },
  ];


  const startAutoRotate = () => {
    if (!autoInterval.current) {
      autoInterval.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
  };


  const stopAutoRotate = () => {
    if (autoInterval.current) {
      clearInterval(autoInterval.current);
      autoInterval.current = null;
    }
  };


  const handleUserClick = (index) => {
    setActiveStep(index);
    setIsPaused(true);
    stopAutoRotate();


    if (resumeTimer.current) clearTimeout(resumeTimer.current);


    resumeTimer.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };


  useEffect(() => {
    if (!isPaused) startAutoRotate();
    else stopAutoRotate();

    return () => stopAutoRotate();
  }, [isPaused]);

  useEffect(() => {
    startAutoRotate();
    return () => {
      stopAutoRotate();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <section className="hiw2">
      <div className="hiw2-container">
        <h3 className="hiw2-title">How It Works</h3>
        <br />
        <div className="hiw2-body">

          <div className="hiw2-steps-nav">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`hiw2-step-nav-item ${index === activeStep ? "active" : ""
                  }`}
                onClick={() => handleUserClick(index)}
              >
                <div className="hiw2-step-number">0{index + 1}</div>
                <div className="hiw2-step-title">
                  {step.title.split(",")[0]}
                </div>
                <div className="hiw2-step-indicator"></div>
              </div>
            ))}
          </div>


          <div className="hiw2-content">

            <div className="hiw2-visual" onClick={() => handleUserClick(activeStep)}>
              <div className="hiw2-image-container">
                <img
                  src={steps[activeStep].image}
                  alt={`Step ${activeStep + 1}`}
                  className="hiw2-fade-image"
                />
              </div>


              <div className="hiw2-dots">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    className={`hiw2-dot ${i === activeStep ? "active" : ""}`}
                    onClick={() => handleUserClick(i)}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="hiw2-steps">
              <div className="hiw2-step-content">
                <h3>{steps[activeStep].title}</h3>
                <div className="hiw2-mini-grid">
                  {steps[activeStep].points.map((point, index) => (
                    <div key={index} className="hiw2-mini-point">
                      <span className="hiw2-point-icon">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>


              <div className="hiw2-actions">
                <button
                  className="hiw2-btn hiw2-btn-primary"
                  onClick={() => window.open("https://app.falayn.com", "_blank")}
                >
                  Start Now, It's Free
                </button>
                <button
                  className="hiw2-btn hiw2-btn-secondary"
                  onClick={() => handleUserClick(activeStep)}
                >
                  Discover Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
