import React, { useState } from 'react';
import Heroimg from '../assets/RemoteAssets/heroimage.png';
import "../components/Componetcss/HeroInside.css";
import Captcha from "./Captcha";
const GOOGLE_FORM_URL = import.meta.env.VITE_HEROINSIDE_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: "entry.798578647",
  workEmail: "entry.777866801",
  companyName: "entry.2048603454",
  annualRevenue: "entry.1286236094",
  salesTeamSize: "entry.508567709",
  keyChallenges: "entry.550721488",
};

const HeroInside = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [salesChallenges, setSalesChallenges] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    annualRevenue: "",
    salesTeamSize: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isJobSeekerPrompt, setIsJobSeekerPrompt] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const publicEmailDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'protonmail.com', 'mail.com', 'zoho.com', 'gmx.com'
  ];

  const validateEmail = (email) => {
    const lowerEmail = email.toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lowerEmail)) {
      return "Please enter a valid email address";
    }
    const domain = lowerEmail.split('@')[1];
    if (publicEmailDomains.includes(domain)) {
      return "personal_email";
    }
    return "";
  };

  const openPopup = () => setPopupOpen(true);

  const closePopup = () => {
    setPopupOpen(false);
    setSalesChallenges([]);
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      annualRevenue: "",
      salesTeamSize: "",
    });
    setEmailError("");
    setCaptchaValid(false);
    setIsJobSeekerPrompt(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "workEmail") {
      const lowerValue = value.toLowerCase();
      setFormData(prev => ({ ...prev, [name]: lowerValue }));
      const err = validateEmail(lowerValue);
      setEmailError(err === "personal_email" ? "Please use a company email address (e.g., name@yourcompany.com)" : err);
      setIsJobSeekerPrompt(err === "personal_email");
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleChallengeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSalesChallenges([...salesChallenges, value]);
    } else {
      setSalesChallenges(salesChallenges.filter((c) => c !== value));
    }
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
      setEmailError(emailValidationError === "personal_email" ? "Please use a company email address (e.g., name@yourcompany.com)" : emailValidationError);
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

    if (salesChallenges.length === 0) {
      alert("Please select at least one key sales challenge.");
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
      formBody.append(GOOGLE_FORM_FIELDS.annualRevenue, formData.annualRevenue);
      formBody.append(GOOGLE_FORM_FIELDS.salesTeamSize, formData.salesTeamSize);
      salesChallenges.forEach((challenge) => {
        formBody.append(GOOGLE_FORM_FIELDS.keyChallenges, challenge);
      });

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      alert("Sales audit form submitted successfully");
      closePopup();
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <section className="hero-section heroinside-hero-section mt-5">
      <div className="container py-5">
        <div className="row align-items-center heroinside-row">
          <div className="col-md-7 text-md-start text-center hero-content">
            <h2 className="hero-title-inside">
              Build a Predictable Sales Pipeline Without Hiring a{" "}
              <span className="highlight-inside">Full Sales Team</span>
            </h2>
            <p className="hero-sub">
              We help small & mid-size tech firms generate qualified leads,
              automate sales workflows, and close more deals — all at a fixed
              monthly cost
            </p>
            <div className="d-flex gap-3 justify-content-md-start justify-content-center flex-wrap mb-3">
              <button
                className="insidesale-button"
                onClick={openPopup}
              >
                Get Free Sales Audit
              </button>
            </div>
          </div>
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img src={Heroimg} alt="Recruitment Channels" className="hero-img" />
          </div>
        </div>
      </div>

      {popupOpen && (
        <div className="sales-popup-overlay">
          <div className="sales-popup-content">
            <button className="sales-popup-close" onClick={closePopup}>
              &times;
            </button>
            <h2 className="sales-popup-title">
              Build a predictable sales pipeline without hiring a full sales team
            </h2>
            <p className="sales-popup-sub">
              Our audit will identify gaps and opportunities in your current
              sales process, showing where you can optimize for growth.
            </p>
            <form className="sales-popup-form" onSubmit={handleSubmit}>
              <div className="sales-form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sales-form-group">
                <label>Work Email*</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                />
                {emailError && !isJobSeekerPrompt && <p className="error-text" style={{ color: 'red', fontSize: '0.9em' }}>{emailError}</p>}
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
              <div className="sales-form-group">
                <label>Company Name*</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sales-form-group">
                <label>Annual Revenue*</label>
                <select
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="<$1M">&lt;$1M</option>
                  <option value="$1M - $5M">$1M - $5M</option>
                  <option value="$5M - $20M">$5M - $20M</option>
                  <option value=">$20M">&gt;$20M</option>
                </select>
              </div>
              <div className="sales-form-group">
                <label>Current Sales Team Size*</label>
                <select
                  name="salesTeamSize"
                  value={formData.salesTeamSize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
              <div className="sales-form-group">
                <label>Key Sales Challenges*</label>
                <div className="sales-checkbox-group">
                  {["Lead Generation", "Sales Automation", "Pipeline Management", "Closing Deals"].map(
                    (challenge, index) => (
                      <label key={challenge}>
                        <input
                          type="checkbox"
                          name="salesChallenges"
                          value={challenge}
                          checked={salesChallenges.includes(challenge)}
                          onChange={handleChallengeChange}
                          required={index === 0 && salesChallenges.length === 0}
                        />
                        {challenge}
                      </label>
                    )
                  )}
                </div>
              </div>
              <div className="sales-form-group">
                <Captcha onChange={handleCaptchaChange} />
              </div>
              <button
                type="submit"
                className="btn custom-btn sales-submit-btn"
                disabled={
                  !!emailError ||
                  !captchaValid ||
                  isJobSeekerPrompt ||
                  salesChallenges.length === 0
                }
              >
                Schedule My Free Audit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroInside;
