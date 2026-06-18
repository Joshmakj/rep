import React, { useEffect, useState } from "react";
import "../components/Componetcss/HeroAi.css";
import AiImage from "../assets/RemoteAssets/AiMl.png";
import Captcha from "./Captcha";
const GOOGLE_FORM_URL = import.meta.env.VITE_HEROAI_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: "entry.1040393276",
  workEmail: "entry.402314309",
  companyName: "entry.976128609",
  serviceOfInterest: "entry.175013977",
  projectType: "entry.976607965",
  budgetRange: "entry.2066593239",
};

const HeroAi = () => {
  const items = [
    "Finance",
    "Supply Chain",
    "Human Resource",
    "IT & Infrastructure",
    "Sales & Marketing",
    "Operations",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    serviceOfInterest: "",
    projectType: "",
    budgetRange: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isJobSeekerPrompt, setIsJobSeekerPrompt] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const publicEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
    "mail.com",
    "zoho.com",
    "gmx.com",
  ];

  const validateEmail = (email) => {
    const lowerEmail = email.toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lowerEmail)) {
      return "Please enter a valid email address";
    }
    const domain = lowerEmail.split("@")[1];
    if (publicEmailDomains.includes(domain)) {
      return "personal_email";
    }
    return "";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [items.length]);

  const openPopup = (service) => {
    setFormData((prev) => ({ ...prev, serviceOfInterest: service }));
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      serviceOfInterest: "",
      projectType: "",
      budgetRange: "",
    });
    setEmailError("");
    setCaptchaValid(false);
    setIsJobSeekerPrompt(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "workEmail") {
      const lowerValue = value.toLowerCase();
      setFormData((prev) => ({ ...prev, [name]: lowerValue }));
      const err = validateEmail(lowerValue);
      setEmailError(err === "personal_email" ? "Please use a company email address (e.g., name@yourcompany.com)" : err);
      setIsJobSeekerPrompt(err === "personal_email");
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
      formBody.append(
        GOOGLE_FORM_FIELDS.serviceOfInterest,
        formData.serviceOfInterest
      );
      formBody.append(GOOGLE_FORM_FIELDS.projectType, formData.projectType);
      formBody.append(GOOGLE_FORM_FIELDS.budgetRange, formData.budgetRange);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      alert("Form submitted successfully!");
      closePopup();
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="heroai-container container py-5">
      <div className="row align-items-center">
        <div className="heroai-left col-md-6">
          <h1 className="heroai-headline display-4 fw-bold mb-4">
            Custom AI Solutions for{" "}
            <span className="heroai-inline-animate">{items[currentIndex]}</span>
          </h1>
          <p className="heroai-subheadline fs-5 mb-4">
            Whether you're looking to hire top-tier AI/ML FTE's at an all-inclusive fixed
            cost per month or build custom Platforms/Plugins to transform your business
            functions, we help you deploy intelligent solutions that drive efficiency,
            insight and growth.
          </p>

          <div className="heroai-buttons d-flex gap-3">
            <button className="button" onClick={() => openPopup("Hire AI Talent")}>
              Hire AI Talent
            </button>
            <button className="button" onClick={() => openPopup("Build AI Solution")}>
              Build AI Solution
            </button>
          </div>
        </div>

        <div className="heroai-right col-md-6 text-center">
          <img src={AiImage} alt="AI illustration" className="heroai-image img-fluid" />
        </div>
      </div>

      {popupOpen && (
        <div className="ai-popup-overlay">
          <div className="ai-popup-content">
            <button className="ai-popup-close" onClick={closePopup}>
              &times;
            </button>

            <h2 className="ai-popup-title">
              Whether you're looking to hire top-tier AI/ML talent or build a custom AI
              solution from scratch
            </h2>
            <p className="ai-popup-sub">
              We provide intelligent solutions that drive efficiency, insight, and growth
              at an all-inclusive fixed cost per month.
            </p>

            <form className="ai-popup-form" onSubmit={handleSubmit}>
              <div className="ai-form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ai-form-group">
                <label>Work Email*</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                />
                {emailError && !isJobSeekerPrompt && (
                  <p className="error-text" style={{ color: "red", fontSize: "0.9em" }}>
                    {emailError}
                  </p>
                )}
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

              <div className="ai-form-group">
                <label>Company Name*</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ai-form-group">
                <label>Service of Interest*</label>
                <div className="ai-radio-group">
                  {["Hire AI Talent", "Build AI Solution"].map((service) => (
                    <label key={service}>
                      <input
                        type="radio"
                        name="serviceOfInterest"
                        value={service}
                        checked={formData.serviceOfInterest === service}
                        onChange={handleChange}
                        required
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div className="ai-form-group">
                <label>Type of Project*</label>
                <input
                  type="text"
                  name="projectType"
                  placeholder='e.g., "NLP," "Predictive Analytics," "Custom AI Model"'
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ai-form-group">
                <label>Budget Range*</label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="<$5k">&lt;$5k</option>
                  <option value="$5k - $15k">$5k - $15k</option>
                  <option value="$15k - $30k">$15k - $30k</option>
                  <option value=">$30k">&gt;$30k</option>
                </select>
              </div>

              <div className="ai-form-group">
                <Captcha onChange={handleCaptchaChange} />
              </div>

              <button
                type="submit"
                className="btn custom-btn ai-submit-btn"
                disabled={!!emailError || !captchaValid || isJobSeekerPrompt}
              >
                Get a Custom Quote
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroAi;
