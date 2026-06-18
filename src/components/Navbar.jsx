import { NavLink } from "react-router-dom";
import React, { useRef } from "react";

import teamuplogo from "../assets/teamuplogo.png";
import "../components/Componetcss/Navbar.css";

const Navbar = () => {
  const collapseRef = useRef(null);

  const closeMobileMenu = () => {
    const collapseEl = collapseRef.current;
    const toggler = document.querySelector(".navbar-toggler");
    
    if (collapseEl && toggler && window.getComputedStyle(toggler).display !== "none") {
      // Remove 'show' class to close the menu
      collapseEl.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-2">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeMobileMenu}>
          <img src={teamuplogo} alt="TeamUp Logo" className="logo me-2" />
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={collapseRef}
          className="collapse navbar-collapse justify-content-end"
          id="mainNavbar"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/recruitment" onClick={closeMobileMenu}>
                Recruitment
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#!"
                id="remoteTeamDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Remote Team
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="remoteTeamDropdown"
              >
                <li>
                  <NavLink className="dropdown-item" to="/insidesales" onClick={closeMobileMenu}>
                    Inside Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/enterprise-ai" onClick={closeMobileMenu}>
                    AI/ML
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="button fw-bold px-4 ms-lg-2" to="/jobseeker" onClick={closeMobileMenu}>
                Jobseeker?
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;