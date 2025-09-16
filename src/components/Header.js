import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import profileImage from "../assets/divya-attarde-iamge.png";

// Import tech SVG icons
import ReactIcon from "../assets/tech Svg/React.svg";
import JavaScriptIcon from "../assets/tech Svg/JavaScript.svg";
import JavaIcon from "../assets/tech Svg/Java.svg";
import NodeIcon from "../assets/tech Svg/Node.js.svg";
import NextIcon from "../assets/tech Svg/Next.js.svg";
import SpringIcon from "../assets/tech Svg/Spring.svg";
import MongoIcon from "../assets/tech Svg/MongoDB.svg";
import PostgresIcon from "../assets/tech Svg/PostgresSQL.svg";
import AWSIcon from "../assets/tech Svg/AWS.svg";
import AzureIcon from "../assets/tech Svg/Azure.svg";
import GCPIcon from "../assets/tech Svg/Google Cloud.svg";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId) && sectionId !== activeSection) {
            console.log('Section in view:', sectionId);
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        console.log('Observing section:', sectionId, 'at position:', element.offsetTop);
      } else {
        console.log('Section not found:', sectionId);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection]);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Minimal Left Tab Navigation */}
      <aside className="tab-nav">
        <nav className="tab-menu">
          <ul className="tab-links">
            <li>
              <a 
                href="#home" 
                className={activeSection === "home" ? "active" : ""}
                onClick={() => handleSectionClick("home")}
              >
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === "about" ? "active" : ""}
                onClick={() => handleSectionClick("about")}
              >
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => handleSectionClick("skills")}
              >
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === "experience" ? "active" : ""}
                onClick={() => handleSectionClick("experience")}
              >
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => handleSectionClick("projects")}
              >
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => handleSectionClick("contact")}
              >
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-button ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <a href="#home" onClick={() => handleSectionClick("home")}>
                <i className="bi bi-house"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handleSectionClick("about")}>
                <i className="bi bi-person"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => handleSectionClick("skills")}>
                {/* <i className="bi bi-code-slash"></i> */}
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => handleSectionClick("projects")}>
                <i className="bi bi-briefcase"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleSectionClick("contact")}>
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* Background Floating Tech Icons */}
        <div className="bg-tech-icon bg-tech-1">
          <img src={ReactIcon} alt="React" />
        </div>
        <div className="bg-tech-icon bg-tech-2">
          <img src={JavaScriptIcon} alt="JavaScript" />
        </div>
        <div className="bg-tech-icon bg-tech-3">
          <img src={JavaIcon} alt="Java" />
        </div>
        <div className="bg-tech-icon bg-tech-4">
          <img src={NodeIcon} alt="Node.js" />
        </div>
        <div className="bg-tech-icon bg-tech-5">
          <img src={SpringIcon} alt="Spring Boot" />
        </div>
        <div className="bg-tech-icon bg-tech-6">
          <img src={NextIcon} alt="Next.js" />
        </div>
        <div className="bg-tech-icon bg-tech-7">
          <img src={MongoIcon} alt="MongoDB" />
        </div>
        <div className="bg-tech-icon bg-tech-8">
          <img src={AWSIcon} alt="AWS" />
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">Divya Attarde</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="highlight">Software Developer</span>
            </h2>
            <p className="hero-description">
              Passionate Junior Software Developer specializing in building web and mobile applications, 
              SEO tools, and client platforms using modern technologies like React.js, Spring Boot, and Next.js.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">70+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a
                href="#projects"
                className="primary-button"
                onClick={() => handleSectionClick("projects")}
              >
                <i className="bi bi-briefcase"></i>
                View Projects
              </a>
              <a
                href="#contact"
                className="secondary-button"
                onClick={() => handleSectionClick("contact")}
              >
                <i className="bi bi-chat-dots"></i>
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-container">
              <img 
                src={profileImage} 
                alt="Divya Attarde - Software Developer" 
                className="hero-profile-image"
              />
              {/* <div className="hero-image-overlay">
                <div className="floating-tech tech-1">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="floating-tech tech-2">
                  <i className="bi bi-braces"></i>
                </div>
                <div className="floating-tech tech-3">
                  <i className="bi bi-database"></i>
                </div>
                <div className="floating-tech tech-4">
                  <i className="bi bi-laptop"></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>
    </>
  );
};

export default Header;
