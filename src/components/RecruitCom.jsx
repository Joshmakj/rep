import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../components/Componetcss/RecruitCom.css";
import Talent from "../assets/RecruitmentAssets/Recruitment-Channels-1.png";
import Practices from "../assets/RecruitmentAssets/Recruitment-Practices-1.png";
import Automation from "../assets/RecruitmentAssets/Recruitment-Automation-3.png";
import Captcha from "./Captcha";
const GOOGLE_FORM_URL = import.meta.env.VITE_RECRUITCOM_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: "entry.2121655868",
  workEmail: "entry.931435469",
  companyName: "entry.583298529",
  interestedService: "entry.744228024",
  primaryChallenge: "entry.17108684",
  message: "entry.66314203",
};

const RecruitCom = () => {
  const [activeTab, setActiveTab] = useState("talent");
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    primaryChallenge: "",
    message: ""
  });
  const [emailError, setEmailError] = useState("");
  const [isJobSeekerPrompt, setIsJobSeekerPrompt] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const publicEmailDomains = [
    "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
    "icloud.com", "protonmail.com", "mail.com", "zoho.com", "gmx.com"
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    const domain = email.split("@")[1]?.toLowerCase();
    if (publicEmailDomains.includes(domain)) {
      return "personal_email";
    }
    return "";
  };

  const openPopup = (service) => {
    setSelectedService(service);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedService("");
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      primaryChallenge: "",
      message: ""
    });
    setEmailError("");
    setCaptchaValid(false);
    setIsJobSeekerPrompt(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "workEmail") {
      newValue = value.toLowerCase();
      const err = validateEmail(newValue);
      setEmailError(err === "personal_email" ? "Please use a company email address (e.g., name@yourcompany.com)." : err);
      setIsJobSeekerPrompt(err === "personal_email");
    }
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleCaptchaChange = (userInput, correctAnswer) => {
    setCaptchaValid(parseInt(userInput) === correctAnswer);
  };

  const handleJobSeekerResponse = (isJobSeeker) => {
    if (isJobSeeker) {
      window.open(
        "https://app.falayn.com/resume-parser",
        "_blank",
        "noopener,noreferrer"
      );
      closePopup();
    } else {
      setIsJobSeekerPrompt(false);
      setEmailError("Please use a company email address to proceed with hiring.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValidationError = validateEmail(formData.workEmail);
    if (emailValidationError) {
      setEmailError(emailValidationError === "personal_email" ? "Please use a company email address (e.g., name@yourcompany.com)." : emailValidationError);
      if (emailValidationError === "personal_email") {
        setIsJobSeekerPrompt(true);
        return;
      }
      return;
    }

    if (!captchaValid) {
      setEmailError("Please solve the CAPTCHA correctly.");
      return;
    }

    try {
      if (!GOOGLE_FORM_URL) {
        throw new Error("Google Form URL is not configured.");
      }

      const formBody = new FormData();
      formBody.append("fvv", "1");
      formBody.append("pageHistory", "0");
      formBody.append("fbzx", Date.now().toString());

      formBody.append(GOOGLE_FORM_FIELDS.fullName, formData.fullName);
      formBody.append(GOOGLE_FORM_FIELDS.workEmail, formData.workEmail);
      formBody.append(GOOGLE_FORM_FIELDS.companyName, formData.companyName);
      formBody.append(GOOGLE_FORM_FIELDS.interestedService, selectedService);
      formBody.append(
        GOOGLE_FORM_FIELDS.primaryChallenge,
        formData.primaryChallenge
      );
      formBody.append(GOOGLE_FORM_FIELDS.message, formData.message);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      alert("Form submitted successfully");
      closePopup();
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="container my-5 recruit-section">
      <div className="tab-titles">
        <h5
          className={`tab-title ${activeTab === "talent" ? "active" : ""}`}
          onClick={() => setActiveTab("talent")}
        >
          Talent
        </h5>
        <h5
          className={`tab-title ${activeTab === "practices" ? "active" : ""}`}
          onClick={() => setActiveTab("practices")}
        >
          Practices
        </h5>
        <h5
          className={`tab-title ${activeTab === "automation" ? "active" : ""}`}
          onClick={() => setActiveTab("automation")}
        >
          Automation
        </h5>
      </div>

      <div className="row align-items-center mx-5">
        {activeTab === "talent" && (
          <>
            <div className="col-md-6">
              <h3 className="section-heading mb-4">
                Large pool of qualified candidates sourced from multiple platforms
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Solution Overview</h6>
                      
                    </div>
                    <p className="small">
                      Tap into a vast network of candidates sourced from job portals,
                      social platforms, events, and referrals — all enriched by AI-driven matching
                      and screening for faster, smarter hiring decisions.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">AI-Powered Screening</h6>
                    
                    </div>
                    <p className="small">
                      Leverage advanced AI/ML algorithms to evaluate resumes, skills, and experience,
                      ensuring only the most relevant and qualified candidates reach your hiring pipeline.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Intelligent Candidate Sourcing</h6>
              
                    </div>
                    <p className="small">
                      Automatically source talent across multiple platforms — job boards, ads, and social networks —
                      while reducing manual effort and reaching hidden, passive candidates.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Market Insights & Analytics</h6>
                    
                    </div>
                    <p className="small">
                      Gain data-driven insights into the job market, candidate availability,
                      and hiring trends to close hard-to-fill roles and plan recruitment
                      strategies with confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="btn btn-popup-talent custom-btn"
                  onClick={() => openPopup("Talent")}
                >
                  Explore Talent
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={Talent} alt="Talent" className="recruit-img" />
            </div>
          </>
        )}

        {activeTab === "practices" && (
          <>
            <div className="col-md-6">
              <h3 className="section-heading mb-4">
                Interview only Qualified Candidates by
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Role Definition & Requirement Gathering</h6>
               
                    </div>
                    <p className="small">
                      Clearly define the job role and expectations upfront to align hiring goals with business needs.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Smart Sourcing for Fit</h6>
                  
                    </div>
                    <p className="small">
                      Identify candidates from diverse backgrounds, focusing on both technical expertise and cultural alignment.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">AI-Driven Skill Scoring</h6>
                 
                    </div>
                    <p className="small">
                      Evaluate and score candidates against required skill sets to ensure the best match for the role.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Structured Interviews & Continuous Follow-up</h6>
                   
                    </div>
                    <p className="small">
                      Conduct structured interviews to assess experience, goals, and references,
                      followed by consistent follow-ups to close gaps and secure the right hire.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="btn btn-popup-practices custom-btn"
                  onClick={() => openPopup("Practices")}
                >
                  Explore Practices
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={Practices} alt="Practices" className="recruit-img" />
            </div>
          </>
        )}

        {activeTab === "automation" && (
          <>
            <div className="col-md-6">
              <h3 className="section-heading mb-4">
                Quick Turnaround Time by introducing Recruitment Automation Tools
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Automated Candidate Sourcing</h6>
                  
                    </div>
                    <p className="small">
                      Leverage custom-built plugins and integrations with job boards and social media platforms to
                      source top talent and auto-post open roles at scale.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">AI/ML-Powered Screening</h6>
             
                    </div>
                    <p className="small">
                      Use machine learning to predict role fit and AI-driven assessments to screen candidates
                      based on skills, responses, and performance.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Candidate Engagement & Experience</h6>
                   
                    </div>
                    <p className="small">
                      Engage candidates with chatbots that guide them to suitable roles, provide feedback, and automate
                      interview scheduling for a seamless hiring journey.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm h-100 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">Relationship & Referral Management</h6>
                  
                    </div>
                    <p className="small">
                      Centralize candidate interactions with an in-house CRM while boosting quality hires through trusted employee referral schemes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="btn btn-popup-automation custom-btn"
                  onClick={() => openPopup("Automation")}
                >
                  Explore Automation
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={Automation} alt="Automation" className="recruit-img" />
            </div>
          </>
        )}
      </div>

      {popupOpen && (
        <div className="popup-overlay recruit-popup-overlay">
          <div className="popup-content recruit-popup-content">
            <button className="popup-close recruit-popup-close" onClick={closePopup}>
              &times;
            </button>
            <h2 className="popup-title recruit-popup-title">Our Omnichannel Recruitment Approach</h2>
            <p className="popup-sub recruit-popup-sub">
              Our omnichannel recruitment approach sources qualified candidates from multiple platforms. We use AI to screen applicants, provide market insights, and automate tasks to reduce manual effort. Let us show you how to streamline your recruitment process.
            </p>
            <form className="form-step recruit-popup-form" onSubmit={handleSubmit}>
              <div className="form-group recruit-form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={`form-group recruit-form-group ${emailError ? "has-error" : ""}`}>
                <label>Work Email*</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className={emailError ? "is-invalid" : ""}
                />
                {emailError && !isJobSeekerPrompt && <div className="invalid-feedback">{emailError}</div>}
              </div>
              {isJobSeekerPrompt && (
                <div className="form-group job-seeker-prompt">
                  <p>It looks like you're using a personal email. Are you a job seeker?</p>
                  <div className="d-flex gap-3">
                    <button
                      type="button"
                      className="btn-jobsee-yes"
                      onClick={() => handleJobSeekerResponse(true)}
                    >
                      Yes, I'm a job seeker
                    </button>
                    <button
                      type="button"
                      className="btn-jobsee-hire"
                      onClick={() => handleJobSeekerResponse(false)}
                    >
                      No, I want to hire
                    </button>
                  </div>
                </div>
              )}
              <div className="form-group recruit-form-group">
                <label>Company Name*</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group recruit-form-group">
                <label>Interested Service*</label>
                <div className="radio-group recruit-radio-group">
                  {["Talent", "Practices", "Automation"].map((service) => (
                    <label key={service}>
                      <input
                        type="radio"
                        value={service}
                        checked={selectedService === service}
                        onChange={(e) => setSelectedService(e.target.value)}
                        required
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group recruit-form-group">
                <label>Primary Challenge*</label>
                <input
                  type="text"
                  name="primaryChallenge"
                  value={formData.primaryChallenge}
                  onChange={handleChange}
                  placeholder="e.g., Slow hiring process"
                  required
                />
              </div>
              <div className="form-group recruit-form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional details (optional)"
                />
              </div>
              <div className="form-group recruit-form-group">
                <Captcha onChange={handleCaptchaChange} />
              </div>
              <button
                type="submit"
                className="btn custom-btn recruit-submit-btn"
                disabled={!!emailError || !captchaValid || isJobSeekerPrompt}
              >
                Request a Consultation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruitCom;
