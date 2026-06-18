import React, { useState } from "react";
import "../components/Componetcss/RecruitmentProcess.css";
import RecruitmentStep from "../assets/HomeAssets/recruitmentstep.png";
import teampic from "../assets/HomeAssets/teampic.jpg";
import Captcha from "./Captcha";
const GOOGLE_FORM_URL = import.meta.env.VITE_RECRUITMENTPROCESS_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: "entry.633057568",
  workEmail: "entry.755163587",
  companyName: "entry.710523679",
  targetRole: "entry.1926756022",
  targetAudience: "entry.1802215842",
  campaignGoal: "entry.181299799",
};

const RecruitmentProcess = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    targetRole: "",
    targetAudience: "",
    campaignGoal: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isJobSeekerPrompt, setIsJobSeekerPrompt] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const validateEmail = (email) => {
    const lowercaseEmail = email.toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const blockedDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "icloud.com",
    ];
    const domain = lowercaseEmail.split("@")[1];

    if (!emailRegex.test(lowercaseEmail)) {
      return "Please enter a valid email address";
    }
    if (blockedDomains.includes(domain)) {
      return "personal_email";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "workEmail") {
      const lowercaseValue = value.toLowerCase();
      setFormData((prev) => ({ ...prev, [name]: lowercaseValue }));
      const err = validateEmail(lowercaseValue);
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
    const emailValidation = validateEmail(formData.workEmail);
    if (emailValidation) {
      setEmailError(emailValidation === "personal_email" ? "Please use a company email address (e.g., name@yourcompany.com)" : emailValidation);
      if (emailValidation === "personal_email") {
        setIsJobSeekerPrompt(true);
        return;
      }
      alert(emailValidation);
      return;
    }

    if (!captchaValid) {
      setEmailError("Please solve the CAPTCHA correctly.");
      alert("Please solve the CAPTCHA correctly.");
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
      formBody.append(GOOGLE_FORM_FIELDS.targetRole, formData.targetRole);
      formBody.append(GOOGLE_FORM_FIELDS.targetAudience, formData.targetAudience);
      formBody.append(GOOGLE_FORM_FIELDS.campaignGoal, formData.campaignGoal);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      alert("Demo request submitted successfully");
      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        targetRole: "",
        targetAudience: "",
        campaignGoal: "",
      });
      setIsPopupOpen(false);
      setEmailError("");
      setCaptchaValid(false);
      setIsJobSeekerPrompt(false);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    }
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      targetRole: "",
      targetAudience: "",
      campaignGoal: "",
    });
    setEmailError("");
    setCaptchaValid(false);
    setIsJobSeekerPrompt(false);
  };

  return (
    <>
      <div className="recruitment-section">
        <h2 className="recruitment-section__title">Our Recruitment Process</h2>
        <div className="recruitment-section__container">
          <div className="recruitment-section__funnel">
            <img src={RecruitmentStep} alt="Recruitment Funnel" />
          </div>
          <div className="recruitment-section__details">
            <div className="recruitment-section__detail-card">
              <h3 className="recruitment-section__detail-title">Sourcing</h3>
              <p className="recruitment-section__detail-text">
                As per the job role discussed with our Success Manager, suitable candidates are sourced from multiple channels including Job Boards, Internal Database, Referral, Social Media, Events & Outreach campaigns.
              </p>
            </div>
            <hr className="recruitment-section__divider" />
            <div className="recruitment-section__detail-card">
              <h3 className="recruitment-section__detail-title">Screening</h3>
              <p className="recruitment-section__detail-text">
                Our Recruiters get on a discovery call with job applicants to screen them on required skill sets, level of experience, cultural fitness & other pre-requisites along with their online assessment scores.
              </p>
            </div>
            <hr className="recruitment-section__divider" />
            <div className="recruitment-section__detail-card">
              <h3 className="recruitment-section__detail-title">Technical Evaluation</h3>
              <p className="recruitment-section__detail-text">
                Subject Matter Expert in our community with respective specialization technically evaluates candidate’s fitment for the role.
              </p>
            </div>
            <hr className="recruitment-section__divider" />
            <div className="recruitment-section__detail-card">
              <h3 className="recruitment-section__detail-title">Interview</h3>
              <p className="recruitment-section__detail-text">
                Shortlisted candidates are then presented for multiple rounds of online/Face to Face interview. Our average interview to hire ratio is 3:1.
              </p>
            </div>
            <hr className="recruitment-section__divider" />
            <div className="recruitment-section__detail-card">
              <h3 className="recruitment-section__detail-title">Background Verification</h3>
              <p className="recruitment-section__detail-text">
                Background verification or Reference checks for a successful hire is performed as required for the role and the report is shared.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="job-candidate-section mb-5">
        <div className="job-candidate-section__wrapper">
          <div className="job-candidate-section__text">
            <h2 className="job-candidate-section__text-title">
              Identify & Reach every potential candidate for your Job role
            </h2>
            <p className="job-candidate-section__text-paragraph ">
              Potential candidates identified by leveraging multiple channels including Job Boards, Social Media, Internal Database, Referral & Events. Personalized outreach campaigns in multiple channels & at regular intervals.
            </p>
            <button className="job-candidate-section__button mb-2" onClick={openPopup}>
              Explore
            </button>
          </div>
          <div className="job-candidate-section__image">
            <img src={teampic} alt="Team working" />
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="job-popup-overlay">
          <div className="job-popup-container">
            <button className="job-popup-close" onClick={closePopup}>
              &times;
            </button>
            <h2 className="job-popup-title">
              Want to identify and reach every potential candidate for your job role?
            </h2>
            <form className="job-popup-form" onSubmit={handleSubmit}>
              <label>
                Full Name *
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Work Email *
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className={emailError ? "is-invalid" : ""}
                  required
                />
                {emailError && !isJobSeekerPrompt && <div className="invalid-feedback">{emailError}</div>}
              </label>
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
              <label>
                Company Name *
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Target Role
                <input
                  type="text"
                  name="targetRole"
                  value={formData.targetRole}
                  onChange={handleChange}
                  placeholder="e.g., Sales Development Representative"
                />
              </label>
              <label>
                Target Audience
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="e.g., Candidates with 3+ years of experience in SaaS sales."
                />
              </label>
              <label>
                Goal of the Campaign
                <input
                  type="text"
                  name="campaignGoal"
                  value={formData.campaignGoal}
                  onChange={handleChange}
                  placeholder="e.g., Fill 5 SDR positions"
                />
              </label>
              <label>
                <Captcha onChange={handleCaptchaChange} />
              </label>
              <button
                type="submit"
                className="button"
                disabled={!!emailError || !captchaValid || isJobSeekerPrompt}
              >
                Request a Demo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RecruitmentProcess;
