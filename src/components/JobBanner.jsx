import React from 'react';
import "../components/Componetcss/JobBanner.css";
import JobseekBanner from "../assets/JobseekerAssets/JobseekBanner.png";

const JobBanner = () => {
  const handleClick = () => {
    window.open("https://app.falayn.com", "_blank");
  };

  return (
    <article className="jobanner container">
      <div className="row align-items-center">
      
        <div className="col-md-5 text-center">
          <img
            src={JobseekBanner}
            alt="Team-up consultants Job banner"
            className="img-fluid jobanner-image"
          />
        </div>

        <div className="col-md-7 jobanner-content">
          <h2 className="jobanner-heading">
           Don't Just <span className="jobanner-highlight-broken">Apply</span>.<br />
           Connect and <span className="jobanner-highlight-better">Get Hired</span>.
          </h2>
          <p className="jobanner-subheading mt3">
           We don’t just show you jobs—we empower you with AI-driven tools to connect<br/>  directly with Hiring Managers & Recruiters, personalizing your outreach to <br/>land interviews faster.
          </p>

          <ul className="jobanner-list">
            <li>
            Match with roles tailored to your <span className="jobanner-lis">skills & intent </span>
            </li>
            <li>
              Generate <span className="jobanner-lis">AI-optimized resumes</span> & <span className="jobanner-lis">cover letters instantly </span>
            </li>
            <li>
             Reach hiring managers directly with <span className="jobanner-lis">automated outreach</span>
            </li>
            <li>
           Track applications, engagement, and <span className="jobanner-lis">responses in real time</span>
            </li>
          </ul>

          <button className="jobanner-btn btn mt-4" onClick={handleClick}>
            Get Matched Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobBanner;
