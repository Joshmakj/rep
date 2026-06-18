import React, { useState } from "react";
import Bannerimg from "../assets/HomeAssets/Banner.png";
import "../components/Componetcss/Banner.css";
import Captcha from "./Captcha";
const GOOGLE_FORM_URL =
  import.meta.env.VITE_BANNER_GOOGLE_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLScONFS2FqNYO7bIaJIVecjFq91GPupoQrQy7C66VGKElRI8nQ/formResponse";
const Banner = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    hiringType: "",
    roleTitle: "",
    openings: "1",
    skills: "",
    hearAbout: "",
    additional: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isJobSeekerPrompt, setIsJobSeekerPrompt] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const blockedDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (blockedDomains.includes(domain)) {
      return "personal_email";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "workEmail") {
      const lowerCaseEmail = value.toLowerCase();
      setFormData({ ...formData, [name]: lowerCaseEmail });
      const err = validateEmail(lowerCaseEmail);
      setEmailError(err === "personal_email" ? "Please use a company email address (e.g., not Gmail, Yahoo, etc.)." : err);
      setIsJobSeekerPrompt(err === "personal_email");
    } else {
      setFormData({ ...formData, [name]: value });
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
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      jobTitle: "",
      hiringType: "",
      roleTitle: "",
      openings: "1",
      skills: "",
      hearAbout: "",
      additional: "",
    });
    setIsJobSeekerPrompt(false);
    setEmailError("");
    setCaptchaValid(false);
    setStep(1);
    setOpen(false);
  } else {
    
    setIsJobSeekerPrompt(false);
    setEmailError("Please use a company email address to proceed with hiring.");
  }
  };
const nextStep = () => {

  if (step === 1) {
    const err = validateEmail(formData.workEmail);

    // Personal email → show job seeker prompt
    if (err === "personal_email") {
      setIsJobSeekerPrompt(true);
      return;
    }

    // Invalid email format
    if (err) {
      setEmailError(err);
      return;
    }
  }

  if (step === 2 && !formData.hiringType) {
    alert("Please select hiring type.");
    return;
  }

  setStep((prev) => prev + 1);
};

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValidationError = validateEmail(formData.workEmail);
    if (emailValidationError) {
      setEmailError(emailValidationError === "personal_email" ? "Please use a company email address (e.g., not Gmail, Yahoo, etc.)." : emailValidationError);
      if (emailValidationError === "personal_email") {
        setIsJobSeekerPrompt(true);
        return;
      } else {
        setEmailError(emailValidationError);
        return;
      }
    }

    if (!captchaValid) {
      setEmailError("Please solve the CAPTCHA correctly.");
      return;
    }

    try {
      // Check required fields
if (
  !formData.fullName ||
  !formData.workEmail ||
  !formData.companyName ||
  !formData.hiringType
) {
  alert("Please fill all required fields.");
  return;
}
const formBody = new FormData();

formBody.append("fvv", "1");
formBody.append("pageHistory", "0");
formBody.append("fbzx", Date.now().toString()); 



formBody.append("entry.1308066293", formData.fullName);
formBody.append("entry.964410362", formData.workEmail);
formBody.append("entry.59320517", formData.companyName);
formBody.append("entry.1698299740", formData.jobTitle);

formBody.append("entry.1589233859", formData.hiringType);
formBody.append("entry.1589233859_sentinel", "");

formBody.append("entry.173169371", formData.roleTitle);
formBody.append("entry.1334115073", formData.openings);

formBody.append("entry.1958623533", formData.skills);
formBody.append("entry.1594578339", formData.hearAbout);

formBody.append("entry.140760818", formData.additional);

await fetch(GOOGLE_FORM_URL, {
  method: "POST",
  mode: "no-cors",
  body: formBody,
});
      alert("Form submitted successfully!");

      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        jobTitle: "",
        hiringType: "",
        roleTitle: "",
        openings: "1",
        skills: "",
        hearAbout: "",
        additional: "",
      });
      setEmailError("");
      setCaptchaValid(false);
      setOpen(false);
      setStep(1);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section className="banner-section mb-6">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7 text-md-start text-center banner-content">
            <h5>Omnichannel Recruitment Practices to</h5>
            <h1 className="banner-title">
              Hire the <span className="highlight">Right Talent</span>
            </h1>
            <p className="banner-sub">
              3X increase in job applicant pipeline leveraging multiple
              recruitment channels & tools to attract active & passive talents.
            </p>
            <div className="d-flex gap-3 justify-content-md-start justify-content-center flex-wrap mb-3">
              <button
                className="btn button btn-lg text-white rounded-pill px-4"
                onClick={() => {
                  setFormData({ ...formData, hiringType: "Permanent - Onsite" });
                  setOpen(true);
                }}
              >
                Permanent - Onsite
              </button>
              <button
                className="btn button btn-lg rounded-pill px-4"
                onClick={() => {
                  setFormData({ ...formData, hiringType: "Contract - Remote" });
                  setOpen(true);
                }}
              >
                Contract - Remote
              </button>
            </div>
          </div>

          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src={Bannerimg}
              alt="Recruitment Channels"
              className="banner-img img-fluid"
            />
          </div>
        </div>
      </div>

      {open && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={() => {
              setOpen(false);
              setCaptchaValid(false);
              setStep(1);
              setEmailError("");
              setIsJobSeekerPrompt(false);
            }}>
              ✖
            </button>
            <h2 className="popup-title">Ready to hire the right talent?</h2>
            <div className="popup-sub">
              <p className="popup-sub mb-1">
                Tell us about your hiring needs. We specialize in finding and
                attracting both active and passive talent to build a strong
                pipeline for your roles.
              </p>
              Whether you need someone for a permanent onsite position or a
              contract remote role, we have the network and tools to connect you
              with the best candidates.
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-step">
                  <h4 className="form-step-title">Step 1: Your Information</h4>
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="workEmail" className="form-label">
                      Work Email *
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      className={`form-input ${emailError ? "is-invalid" : ""}`}
                      required
                    />
                    {emailError && !isJobSeekerPrompt && (
                      <div className="invalid-feedback">{emailError}</div>
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
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company Name *
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jobTitle" className="form-label">
                      Your Job Title
                    </label>
                    <input
                      id="jobTitle"
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                 <button type="button" onClick={nextStep} className="btn-next">
                    Next →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <h4 className="form-step-title">Step 2: Role Details</h4>
                  <div className="form-group">
                    <label className="form-label">Hiring Type *</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="hiringType"
                          value="Permanent - Onsite"
                          checked={formData.hiringType === "Permanent - Onsite"}
                          onChange={(e) =>
                            setFormData({ ...formData, hiringType: e.target.value })
                          }
                          required
                        /> Permanent - Onsite
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="hiringType"
                          value="Contract - Remote"
                          checked={formData.hiringType === "Contract - Remote"}
                          onChange={handleChange}
                          required
                        /> Contract - Remote
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="roleTitle" className="form-label">
                      Job Title of Role(s)
                    </label>
                    <input
                      id="roleTitle"
                      type="text"
                      name="roleTitle"
                      value={formData.roleTitle}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="openings" className="form-label">
                      Number of Openings
                    </label>
                    <select
                      id="openings"
                      name="openings"
                      value={formData.openings}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="1">1</option>
                      <option value="2-5">2-5</option>
                      <option value="6-10">6-10</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="skills" className="form-label">
                      Key Skills/Technologies
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-nav">
                    <button type="button" onClick={prevStep} className="btn-prev">
                      ← Back
                    </button>
                    <button type="button" onClick={nextStep} className="btn-next">
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step">
                  <h4 className="form-step-title">Step 3: Additional Details</h4>
                  <div className="form-group">
                    <label htmlFor="hearAbout" className="form-label">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select an option</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Google">Google</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="additional" className="form-label">
                      Additional Details
                    </label>
                    <textarea
                      id="additional"
                      name="additional"
                      value={formData.additional}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Captcha onChange={handleCaptchaChange} />
                  </div>
                  {emailError && (
                    <div className="invalid-feedback d-block">{emailError}</div>
                  )}
                  <div className="form-nav">
                    <button type="button" onClick={prevStep} className="btn-prev">
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-submit"
                      disabled={!!emailError || !captchaValid}
                    >
                      Connect with a Consultant
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
      
    </section>
  );
};

export default Banner;
