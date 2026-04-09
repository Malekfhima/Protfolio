import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";
import ResumeFR from "../../assets/Malek_Fhima.pdf";
import ResumeEN from "../../assets/Malek_Fhima_EN.pdf";

export function Header() {
  const [isActive, setActive] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }
  function closeMenu() {
    setActive(false);
  }
  function handleResumeDownload(language: string) {
    const resumeLink = language === "fr" ? ResumeFR : ResumeEN;
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download =
      language === "fr" ? "Malek_Fhima_CV_FR.pdf" : "Malek_Fhima_CV_EN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumePopup(false);
  }

  function openResumePopup() {
    setShowResumePopup(true);
  }

  function closeResumePopup() {
    setShowResumePopup(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Malek "}</span>
          <span>{" Fhima/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Projects
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <button className="button" onClick={openResumePopup}>
            Resume
          </button>
        </nav>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Close menu" : "Open menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>

      {showResumePopup && (
        <div className="resume-popup-overlay">
          <div className="resume-popup">
            <div className="popup-header">
              <h3>Choose Language / Choisir la langue</h3>
              <button className="close-btn" onClick={closeResumePopup}>
                ×
              </button>
            </div>
            <div className="popup-content">
              <p>Select your preferred language for the CV:</p>
              <div className="language-buttons">
                <button
                  className="lang-btn fr-btn"
                  onClick={() => handleResumeDownload("fr")}
                >
                  <span className="flag">fr</span>
                  <span className="lang-text">CV Français</span>
                </button>
                <button
                  className="lang-btn en-btn"
                  onClick={() => handleResumeDownload("en")}
                >
                  <span className="flag">en</span>
                  <span className="lang-text">English Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
