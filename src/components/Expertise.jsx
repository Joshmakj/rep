import React from 'react';
import "../components/Componetcss/Expertise.css";
import multisourcing from "../assets/HomeAssets/msp.png";
import toolsframe from "../assets/HomeAssets/tools-frame.png";
import sucessmanger from "../assets/HomeAssets/sucessmanger.png";
import { useEffect, useState } from "react";



 const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); 
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
        setFinished(true);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span className={`counter ${finished ? "finished" : ""}`}>
      {count}
      {suffix}
    </span>
  );
};

const Expertise = () => {
  return (
    <div>
   <div className="recruitment-expertise ">
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center mb-4 mb-md-0">
            <h2 className="mb-0">
              <span>Recruitment</span>
              <br />
              <span className="highlight">Expertise</span>
            </h2>
          </div>

          <div className="col-12 col-md-1 d-none d-md-flex justify-content-center">
            <div className="vertical-line"></div>
          </div>

          <div className="col-12 col-md-6">
            <div className="stats d-flex justify-content-center flex-wrap">
              <div className="stat-item">
                <span className="number">
                  <Counter  end={100} duration={2000} suffix="+" />
                </span>
                <span className='sub-tittle'>Clients Served</span>
              </div>
              <div className="stat-item">
                <span className="number">
                  <Counter end={12} duration={2000} suffix="+" />
                </span>
                <span className='sub-tittle'>Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="number">
                  <Counter end={2000} duration={2500} suffix="+" />
                </span>
                <span className='sub-tittle'>Pre-vetted Live Talents</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <p className="specialization">
              Specialized in hiring Tech Talents including{" "}
              <span className="highlight-city">Arab/Saudi Nationals, Malaysians</span>{" "}
              for{" "}
              <span className="highlight-city">
                Software, IT Infra, Information Security, Digital & Sales
              </span>{" "}
              Projects.
            </p>
          </div>
        </div>
      </div>
    </div>


      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card expertise-card">
              <img
                src={multisourcing}
                alt="Multi Sourcing"
              />
              <h3>Multi Sourcing Platforms</h3>
              <p className='expertise-text'>
                Candidates sourced from multiple platforms including internal pre-vetted
                Talent Pool, Job Board, References, Social Media & Events
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card expertise-card">
              <img
                src={toolsframe}
                alt="Tools & Framework"
              />
              <h3>Tools & Framework</h3>
              <p  className='expertise-text'>
                Custom built framework & 3rd Party tools for deep search in social media
                platforms & automate outreach Campaigns
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card expertise-card">
              <img
                src={sucessmanger}
                alt="Success Manager"
              />
              <h3>Success Manager</h3>
              <p  className='expertise-text'>
                Dedicated Success Manager for each account to score profile suitability
                for role, timely submission & address any queries or concerns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
