import React from "react";
import "../components/Componetcss/JobCard.css";
import { FaStar, FaCheckCircle, FaLightbulb, FaLaptopCode, FaRocket } from "react-icons/fa";

const JobCard = () => {
  return (
    <div className="big-card-wrapper">
      <div className="cv-card-container">
        <div className="cv-card-main">
          {/* Header Section */}
          <div className="cv-card-header">
            <h2 className="cv-card-title">Get Your CV Reviewed for Free</h2>
            <p className="cv-card-subheading">
              Upload your resume and get instant, actionable feedback tailored to your profile.
            </p>
            <button className="cv-card-button">Get Free Review</button>
          </div>

          {/* Features Section */}
          <div className="cv-card-features">
            <div className="cv-feature">
              <div className="cv-feature-icon-wrapper">
                <FaLightbulb className="cv-feature-icon" />
              </div>
              <div className="cv-feature-content">
                <h3 className="cv-feature-title">Discover your score and what to improve to reach 100%</h3>
                <p className="cv-feature-description">
                  Get a detailed breakdown of your CV's strengths and areas for improvement
                </p>
              </div>
            </div>

            <div className="cv-feature">
              <div className="cv-feature-icon-wrapper">
                <FaLaptopCode className="cv-feature-icon" />
              </div>
              <div className="cv-feature-content">
                <h3 className="cv-feature-title">Expert feedback with actionable tips</h3>
                <p className="cv-feature-description">
                  Receive specific recommendations from career professionals
                </p>
              </div>
            </div>

            <div className="cv-feature">
              <div className="cv-feature-icon-wrapper">
                <FaRocket className="cv-feature-icon" />
              </div>
              <div className="cv-feature-content">
                <h3 className="cv-feature-title">Quick insights for remote job optimization</h3>
                <p className="cv-feature-description">
                  Tailored advice for landing remote positions in your field
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="cv-card-testimonial">
            <div className="cv-testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="cv-star-icon" />
              ))}
            </div>
            <blockquote className="cv-testimonial-text">
              "The feedback was concrete, actionable, and of much higher quality than anything I've found..."
            </blockquote>
          </div>

          {/* Benefits Section */}
          <div className="cv-card-benefits">
            <div className="cv-benefit">
              <FaCheckCircle className="cv-benefit-icon" />
              <span>100% free, no credit card required</span>
            </div>
            <div className="cv-benefit">
              <FaCheckCircle className="cv-benefit-icon" />
              <span>Instant export-level feedback</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;