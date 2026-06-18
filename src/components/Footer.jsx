import React from "react";
import teamuplogo from "../assets/teamuplogo.png";
import '../components/Componetcss/Footer.css';
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section container-fluid">
    
      <div className="footer-top text-center">
        <p className="footer-subtitle">LET’S GET STARTED!</p>
        <h2 className="footer-heading mt-3">“A quick call is a great place to start”</h2>
        <div className="footer-buttons ">
    <a href="https://app.hubspot.com/meetings/mohammed-f " target="_blank"  className="btn btn-main me-2 mt-3">
  BOOK A MEETING
</a>

       
         <a href="mailto:mohammed.f@teamupconsultants.com" target="_blank"  className="btn btn-main me-2 mt-3">
            EMAIL US
               </a>
        </div>
      </div>


      <div className="container footer-main">
        <div className="row">
       
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="footer-logo">
              <img src={teamuplogo} alt="TeamUp Consultants" className="logo-img " />
            </div>
            <p className="footer-address text-center mt-3">
              Sona Incubations, 2nd Floor Valliappa Block,<br />
              Sona College of Technology, Junction Main Road,<br />
              Salem, Tamil Nadu, India – 636 005<br />
              <a href="mailto:info@teamupconsultants.com">
                info@teamupconsultants.com
              </a><br />
              +91 908 034 1266
            </p>
            <div className="social-icons text-center">
              <a target="_blank" href="https://www.linkedin.com/company/teamupconsultants"><FaLinkedin /></a>
              <a target="_blank" href="https://www.facebook.com/TeamUp.Consultants"><FaFacebookF /></a>
              <a target="_blank" href="https://x.com/teamupconsulta1"><FaTwitter /></a>
            </div>
          </div>


          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <h6>Platform</h6>
            <ul className="list-unstyled">
              <li><a href="#">Candidate Profiles</a></li>
              <li><a href="#">Upload CV</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Partnerships</a></li>
            </ul>
          </div>

      
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <h6>Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

  
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <h6>About</h6>
            <ul className="list-unstyled">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">FAQ’s</a></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom text-center">
        <p>© TeamUp Consultants 2016 – 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
