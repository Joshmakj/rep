import "../components/Componetcss/Collaborative.css";
import React, { useState } from "react";
import communityHand from "../assets/HomeAssets/sme.png";
import smenew from "../assets/HomeAssets/smenew.png";
import Captcha from "./Captcha"; // Import CAPTCHA component
const GOOGLE_FORM_URL = import.meta.env.VITE_COLLABORATIVE_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: "entry.1686484487",
  personalEmail: "entry.394716167",
  phoneNumber: "entry.104938290",
  linkedinUrl: "entry.2142872262",
  expertise: "entry.1921801465",
  experience: "entry.353341645",
  availability: "entry.1009080779",
};

const Collaborative = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    personalEmail: "",
    phoneNumber: "",
    linkedinUrl: "",
    expertise: "",
    experience: "",
    availability: "",
  });
  const [captchaValid, setCaptchaValid] = useState(false); // State for CAPTCHA validation

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => {
    setIsFormOpen(false);
    setFormData({
      fullName: "",
      personalEmail: "",
      phoneNumber: "",
      linkedinUrl: "",
      expertise: "",
      experience: "",
      availability: "",
    });
    setCaptchaValid(false); // Reset CAPTCHA state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (userInput, correctAnswer) => {
    setCaptchaValid(parseInt(userInput) === correctAnswer); // Validate CAPTCHA
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Check CAPTCHA validation
    if (!captchaValid) {
      alert("Please solve the CAPTCHA correctly.");
      setIsLoading(false);
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
      formBody.append(GOOGLE_FORM_FIELDS.personalEmail, formData.personalEmail);
      formBody.append(GOOGLE_FORM_FIELDS.phoneNumber, formData.phoneNumber);
      formBody.append(GOOGLE_FORM_FIELDS.linkedinUrl, formData.linkedinUrl);
      formBody.append(GOOGLE_FORM_FIELDS.expertise, formData.expertise);
      formBody.append(GOOGLE_FORM_FIELDS.experience, formData.experience);
      formBody.append(GOOGLE_FORM_FIELDS.availability, formData.availability);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        personalEmail: "",
        phoneNumber: "",
        linkedinUrl: "",
        expertise: "",
        experience: "",
        availability: "",
      });
      setCaptchaValid(false); // Reset CAPTCHA state
      setIsFormOpen(false);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="collab-wrapper">
      <div className="collab-row">
        <div className="collab-image-wrapper">
          <img src={communityHand} alt="Community" className="collab-image" />
        </div>

        <section className="collab-section">
          <div className="collab-card">
            <div className="collab-card-body">
              <p className="collab-text">
                 <img src={smenew} className="collab-image-new"/>
              </p>
              <button className="collab-btn button" onClick={openForm}>
                Join In
              </button>
            </div>
          </div>
        </section>
      </div>

      {isFormOpen && (
        <div className="sme-form-overlay">
          <div className="sme-form-container">
            <button
              className="sme-form-close"
              onClick={closeForm}
              disabled={isLoading}
            >
              &times;
            </button>
            <h2 className="sme-form-title">Are you a Subject Matter Expert?</h2>
            <p className="sme-form-subtitle">
              Join our exclusive community of technical specialists and help us
              screen job applicants.
            </p>

            <form className="sme-form" onSubmit={handleSubmit}>
              <label>
                Full Name *
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                Personal Email *
                <input
                  type="email"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                LinkedIn Profile URL *
                <input
                  type="url"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                Area of Expertise *
                <input
                  type="text"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  placeholder="e.g., AI/ML, Python, Cloud"
                  required
                  disabled={isLoading}
                />
              </label>

              <label>
                Years of Experience *
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option value="<2">&lt;2</option>
                  <option value="2-5">2-5</option>
                  <option value="5-10">5-10</option>
                  <option value="10+">10+</option>
                </select>
              </label>

              <label>
                Preferred Availability
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="e.g., Weekends, Evenings, Flexible"
                  disabled={isLoading}
                />
              </label>

              <label>
                <Captcha onChange={handleCaptchaChange} />
              </label>

              <button
                type="submit"
                className="button"
                disabled={isLoading || !captchaValid} // Disable submit if CAPTCHA is invalid
              >
                {isLoading ? "Submitting..." : "Apply to Join"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collaborative;
