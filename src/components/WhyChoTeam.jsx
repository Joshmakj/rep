import React from "react";
import "../components/Componetcss/WhyChoTeam.css";

const advantages = [
  {
    title: "Your Career, Powered by AI",
    icon: "bi-robot",
    description:
      "Stop sending resumes into the void. Our AI engine actively matches you to ideal roles and gets your profile seen by the right people.",
  },
  {
    title: "Get Introduced, Not Lost",
    icon: "bi-people",
    description:
      "Leverage our network and intelligence to connect directly with hiring teams and unlock opportunities that aren't publicly listed.",
  },
  {
    title: "Your AI Job Search Partner",
    icon: "bi-chat-dots",
    description:
      "From optimizing your profile with recruiter insights to automating applications and providing real-time feedback, we're your partner in the modern job market. ",
  },
];

const WhyChoTeam = () => {
  return (
    <section className="why-team-section">
      <div className="container">
        <h2 className="why-team-section__title">Why Choose TeamUpConsultants</h2>
        <p className="why-team-section__subtitle">
          Discover a smarter, faster way to find your next career opportunity. We leverage AI to match you with the best roles and help you stand out.
        </p>

        <div className="why-team-section__cards">
          {advantages.map((adv, index) => (
            <div className="why-team-card" key={index}>
              <i className={`bi ${adv.icon} why-team-card__icon`}></i>
              <h3 className="why-team-card__title">{adv.title}</h3>
              <p className="why-team-card__description">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoTeam;
