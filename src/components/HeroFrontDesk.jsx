import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/Componetcss/HeroFrontDesk.css";
import heroImage from "../assets/HomeAssets/hero.png";

const GOOGLE_FORM_URL = import.meta.env.VITE_FRONTDESK_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: "entry.1234567890",
  workEmail: "entry.2345678901",
  companyName: "entry.3456789012",
  service: "entry.4567890123",
  location: "entry.5678901234",
  visitors: "entry.6789012345",
  notes: "entry.7890123456",
};

const featurePills = [
  { icon: "bi-camera-video", label: "Live Video Welcome" },
  { icon: "bi-clock-history", label: "24/7 Availability" },
  { icon: "bi-people", label: "Visitor Management" },
  { icon: "bi-shield-check", label: "Secure & Professional" },
];

const initialFormState = {
  fullName: "",
  workEmail: "",
  companyName: "",
  service: "hire",
  location: "",
  visitors: "",
  captcha: "",
};

const serviceOptions = [
  { value: "hire", label: "Hire a Front Desk Assistant" },
  { value: "demo", label: "Schedule a Demo" },
];

const HeroFrontDesk = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const accentWords = [
    "Law Firms",
    "Government Buildings",
    "Corporate Offices",
    "Medical Clinics",
    "Co-working Spaces",
  ];
  const [accentIndex, setAccentIndex] = useState(0);
  const [accentVisible, setAccentVisible] = useState(true);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => {
    setIsFormOpen(false);
    setFormData(initialFormState);
  };

  useEffect(() => {
    const handler = () => openForm();
    window.addEventListener("open-contact-form", handler);
    return () => window.removeEventListener("open-contact-form", handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccentVisible(false);
      setTimeout(() => {
        setAccentIndex((i) => (i + 1) % accentWords.length);
        setAccentVisible(true);
      }, 350);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setFormErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!formData.companyName.trim()) errors.companyName = "Please enter a company name.";
    if (!formData.workEmail.trim()) {
      errors.workEmail = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
      errors.workEmail = "Please enter a valid email address.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!GOOGLE_FORM_URL) {
      setFormErrors({ form: "Google Form URL is not configured." });
      return;
    }

    try {
      const formBody = new FormData();
      formBody.append("fvv", "1");
      formBody.append("pageHistory", "0");
      formBody.append("fbzx", Date.now().toString());
      formBody.append(GOOGLE_FORM_FIELDS.fullName, formData.fullName);
      formBody.append(GOOGLE_FORM_FIELDS.workEmail, formData.workEmail);
      formBody.append(GOOGLE_FORM_FIELDS.companyName, formData.companyName);
      formBody.append(GOOGLE_FORM_FIELDS.service, formData.service);
      formBody.append(GOOGLE_FORM_FIELDS.location, formData.location);
      formBody.append(GOOGLE_FORM_FIELDS.visitors, formData.visitors);
      formBody.append(GOOGLE_FORM_FIELDS.notes, formData.notes || "");

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      closeForm();
      window.alert("Thanks! We’ll reach out shortly.");
    } catch (error) {
      console.error("Google Form submit error:", error);
      setFormErrors({ form: "Unable to submit form right now. Please try again later." });
    }
  };

  return (
    <section className="rfd-hero">
      <div className="rfd-hero__inner container">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-lg-5 col-xl-6">
            <div className="rfd-badge">
              <span className="rfd-badge__dot" />
              <span>24/7 LIVE FRONT DESK SUPPORT</span>
            </div>

            <h1 className="rfd-title" aria-label="Remote Human Front Desk Assistant">
              <span>Remote Human</span>
              <span>Front Desk Assistant for</span>
              <span className={`rfd-title__accent ${accentVisible ? "" : "fade-out"}`}>
                {accentWords[accentIndex]}
              </span>
            </h1>

            <p className="rfd-copy">
              Give your visitors a warm, professional welcome via live video without
              the cost of an on-site receptionist. Our trained remote assistants are
              available 24/7 to greet, direct, and support your guests in real time.
            </p>

            <div className="rfd-features">
              {featurePills.map(({ icon, label }) => (
                <div className="rfd-feature" key={label}>
                  <span className="rfd-feature__icon">
                    <i className={`bi ${icon}`} aria-hidden="true" />
                  </span>
                  <span className="rfd-feature__label">{label}</span>
                </div>
              ))}
            </div>

            <div className="rfd-actions">
              <button type="button" className="rfd-btn rfd-btn--primary" onClick={openForm}>
                Hire a Front Desk Assistant
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
              <button type="button" className="rfd-btn rfd-btn--secondary" onClick={openForm}>
                Schedule a Demo
              </button>
            </div>
          </div>

          <div className="col-lg-7 col-xl-6 d-flex justify-content-lg-end">
            <div className="rfd-visual">
              <div className="rfd-live-card">
                <div className="rfd-live-card__status">
                  <span className="rfd-live-card__dot" />
                  LIVE
                </div>
                <div className="rfd-live-card__text">Connected Receptionist</div>
                <div className="rfd-live-card__avatars">
                  <span>AM</span>
                  <span>JD</span>
                  <span>SK</span>
                  <span className="rfd-live-card__extra">+12</span>
                </div>
              </div>

              <img
                src={heroImage}
                alt="Remote front desk support"
                className="rfd-visual__image"
              />

              <div className="rfd-metrics-card">
                <div className="rfd-metric">
                  <span className="rfd-metric__icon">
                    <i className="bi bi-people" aria-hidden="true" />
                  </span>
                  <div>
                    <strong>500+</strong>
                    <span>Businesses Served</span>
                  </div>
                </div>
                <div className="rfd-metric">
                  <span className="rfd-metric__icon">
                    <i className="bi bi-clock" aria-hidden="true" />
                  </span>
                  <div>
                    <strong>&lt; 30 sec</strong>
                    <span>Avg. Response Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="rfd-modal" role="dialog" aria-modal="true" aria-label="Request a front desk assistant">
          <div className="rfd-modal__backdrop" onClick={closeForm} aria-hidden="true" />
          <div className="rfd-modal__dialog rfd-modal__dialog--large">
            <button type="button" className="rfd-modal__close" onClick={closeForm} aria-label="Close form">
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
            <div className="rfd-modal__body">
              <div className="rfd-modal__eyebrow">24/7 LIVE FRONT DESK SUPPORT</div>
              <h2 className="rfd-modal__title">Get Started with a Remote Front Desk Assistant</h2>
              <p className="rfd-modal__copy">
                Tell us about your needs and we'll match you with a trained professional — available via video call at a fixed monthly cost.
              </p>

              <form className="rfd-modal__form" onSubmit={handleSubmit} noValidate>
                <div className="rfd-form-grid">
                  <label className="rfd-field">
                    <span>Full Name*</span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={!!formErrors.fullName}
                      placeholder="Enter your full name"
                    />
                    {formErrors.fullName && <div className="rfd-field__error">{formErrors.fullName}</div>}
                  </label>

                  <label className="rfd-field">
                    <span>Work Email*</span>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      aria-invalid={!!formErrors.workEmail}
                      placeholder="name@company.com"
                    />
                    {formErrors.workEmail && <div className="rfd-field__error">{formErrors.workEmail}</div>}
                  </label>

                  <label className="rfd-field">
                    <span>Company Name*</span>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      aria-invalid={!!formErrors.companyName}
                      placeholder="Your company or organization"
                    />
                    {formErrors.companyName && <div className="rfd-field__error">{formErrors.companyName}</div>}
                  </label>

                  <label className="rfd-field rfd-field--full">
                    <span>Location / Office Type*</span>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Corporate HQ, Medical Clinic, Co-working Space"
                    />
                  </label>
                </div>

                <fieldset className="rfd-fieldset">
                  <legend>Service of Interest*</legend>
                  <div className="rfd-radio-group rfd-radio-group--pill">
                    {serviceOptions.map((option) => (
                      <label key={option.value} className={`rfd-radio-label ${formData.service === option.value ? 'is-active' : ''}`}>
                        <input
                          type="radio"
                          name="service"
                          value={option.value}
                          checked={formData.service === option.value}
                          onChange={handleChange}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="rfd-form-grid rfd-form-grid--two">
                  <label className="rfd-field">
                    <span>Expected Daily Visitors*</span>
                    <select name="visitors" value={formData.visitors} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option value="0-10">0-10</option>
                      <option value="10-50">10-50</option>
                      <option value="50+">50+</option>
                    </select>
                  </label>

                  <label className="rfd-field">
                    <span>Quick Message</span>
                    <input
                      type="text"
                      name="notes"
                      value={formData.notes || ""}
                      onChange={handleChange}
                      placeholder="Optional note or visitor details"
                    />
                  </label>
                </div>

                <div className="rfd-captcha-row">
                  <label className="rfd-field rfd-field--compact">
                    <span>Security Check</span>
                    <input
                      type="text"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                      placeholder="0 + 1 = ?"
                    />
                  </label>
                  <button type="button" className="rfd-captcha-refresh" aria-label="Refresh captcha">↻</button>
                </div>

                <button type="submit" className="rfd-modal__submit rfd-modal__submit--wide">
                  Get a Custom Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroFrontDesk;
