import React, { useState } from "react";
import "../components/Componetcss/AIMLTable.css";
import Captcha from "./Captcha";
const GOOGLE_FORM_URL = import.meta.env.VITE_AIMLTABLE_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: "entry.1466633488",
  workEmail: "entry.439041521",
  companyName: "entry.1780210435",
  primaryConcerns: "entry.529822789",
  communicationMethod: "entry.857826357",
  projectDescription: "entry.767273313",
};

const AIMLTable = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [primaryConcerns, setPrimaryConcerns] = useState([]);
  const [communicationMethod, setCommunicationMethod] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    projectDescription: "",
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

  const openPopup = () => setPopupOpen(true);

  const closePopup = () => {
    setPopupOpen(false);
    setPrimaryConcerns([]);
    setCommunicationMethod("");
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      projectDescription: "",
    });
    setEmailError("");
    setCaptchaValid(false);
    setIsJobSeekerPrompt(false);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPrimaryConcerns([...primaryConcerns, value]);
    } else {
      setPrimaryConcerns(primaryConcerns.filter((c) => c !== value));
    }
  };

  const handleInputChange = (e) => {
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

    if (primaryConcerns.length === 0) {
      alert("Please select at least one primary concern.");
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
      primaryConcerns.forEach((concern) => {
        formBody.append(GOOGLE_FORM_FIELDS.primaryConcerns, concern);
      });
      formBody.append(
        GOOGLE_FORM_FIELDS.projectDescription,
        formData.projectDescription
      );
      formBody.append(
        GOOGLE_FORM_FIELDS.communicationMethod,
        communicationMethod
      );

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
    <section className="comparison-section py-5 mb-5">
      <div className="container">
        <h2 className="comparison-heading text-center mb-4">
          API-Based LLMs vs Private LLM Deployment
        </h2>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>API-Based LLMs</th>
                <th>Private LLM Deployment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data passes through external servers (privacy risk)</td>
                <td className="highlight">
                  Data stays fully within your environment (compliance-ready)
                </td>
              </tr>
              <tr>
                <td>Pay-per-use costs & unpredictable pricing</td>
                <td className="highlight">
                  One-time investment, predictable cost savings
                </td>
              </tr>
              <tr>
                <td>Limited customization</td>
                <td className="highlight">
                  Fully fine-tuned to your workflows & industry
                </td>
              </tr>
              <tr>
                <td>Dependent on provider uptime & policies</td>
                <td className="highlight">
                  Full control, offline & edge-capable
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-5">
          <button className="button btn-lg" onClick={openPopup}>
            Speak to our LLM Architecture Experts
          </button>
        </div>
      </div>

      {popupOpen && (
        <div className="llm-popup-overlay">
          <div className="llm-popup-content">
            <button className="llm-popup-close" onClick={closePopup}>
              &times;
            </button>

            <h2 className="llm-popup-title">
              Deciding between API-based and private LLM deployment?
            </h2>
            <p className="llm-popup-sub">
              Our experts will help you navigate the options, considering data
              privacy, cost, customization, and control.
            </p>

            <form className="llm-popup-form" onSubmit={handleSubmit}>
              <div className="llm-form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="llm-form-group">
                <label>Work Email*</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
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

              <div className="llm-form-group">
                <label>Company Name*</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="llm-form-group">
                <label>Primary Concern*</label>
                <div className="llm-checkbox-group">
                  {[
                    "Data Privacy",
                    "Cost",
                    "Customization",
                    "Control",
                    "Offline/Edge-capable",
                  ].map((c, index) => (
                    <label key={c} className="llm-checkbox-label">
                      <input
                        type="checkbox"
                        name="primaryConcerns"
                        value={c}
                        checked={primaryConcerns.includes(c)}
                        onChange={handleCheckboxChange}
                        required={index === 0 && primaryConcerns.length === 0}
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </div>

              <div className="llm-form-group">
                <label>Describe Your Project/Use Case*</label>
                <input
                  type="text"
                  name="projectDescription"
                  placeholder='e.g., "Building an internal chatbot"'
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="llm-form-group">
                <label>Preferred Communication Method*</label>
                <div className="llm-radio-group">
                  {["Call", "Email"].map((m) => (
                    <label key={m} className="llm-radio-label">
                      <input
                        type="radio"
                        value={m}
                        checked={communicationMethod === m}
                        onChange={(e) => setCommunicationMethod(e.target.value)}
                        required
                      />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              <div className="llm-form-group">
                <Captcha onChange={handleCaptchaChange} />
              </div>

              <button
                type="submit"
                className="btn llm-submit-btn"
                disabled={
                  !!emailError ||
                  !captchaValid ||
                  isJobSeekerPrompt ||
                  primaryConcerns.length === 0
                }
              >
                Schedule a Call
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIMLTable;
