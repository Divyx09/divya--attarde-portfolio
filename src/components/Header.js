import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className='header-container'>
          <div className='logo-container'>
            <a
              href='#home'
              className='logo'
              onClick={() => handleSectionClick("home")}
            >
              <span className='logo-text'>D</span>
              <span className='logo-dot'></span>
              <span className='logo-text'>A</span>
            </a>
          </div>

          <button
            className={`mobile-menu-button ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle menu'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className='nav-links'>
              <li>
                <a href='#home' onClick={() => handleSectionClick("home")}>
                  <i className='bi bi-house'></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href='#about' onClick={() => handleSectionClick("about")}>
                  <i className='bi bi-person'></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href='#skills' onClick={() => handleSectionClick("skills")}>
                  <i className='bi bi-code-slash'></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  onClick={() => handleSectionClick("projects")}
                >
                  <i className='bi bi-briefcase'></i>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  onClick={() => handleSectionClick("contact")}
                >
                  <i className='bi bi-envelope'></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>

            <div className='nav-footer'>
              <div className='social-links'>
                <a
                  href='https://github.com/divyx09'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='bi bi-github'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/divya-attarde-634650253'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='bi bi-linkedin'></i>
                </a>
                <a href='mailto:divyaattarde94@gmail.com'>
                  <i className='bi bi-envelope-fill'></i>
                </a>
              </div>
              <a
                href='#contact'
                className='contact-button'
                onClick={() => handleSectionClick("contact")}
              >
                Let's Connect
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section id='home' className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            <span className='highlight'>DIVYA ATTARDE</span>
          </h1>
          <p className='hero-subtitle'>Full-Stack Developer</p>
          <p className='hero-description'>
            Passionate about creating innovative web solutions and turning ideas
            into reality.
          </p>
          <div className='hero-buttons'>
            <a
              href='#projects'
              className='primary-button'
              onClick={() => handleSectionClick("projects")}
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='secondary-button'
              onClick={() => handleSectionClick("contact")}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className='hero-background'>
          <div className='animated-shape shape-1'>
            <i className='bi bi-code-slash'></i>
          </div>
          <div className='animated-shape shape-2'>
            <i className='bi bi-braces'></i>
          </div>
          <div className='animated-shape shape-3'>
            <i className='bi bi-database'></i>
          </div>
          <div className='animated-shape shape-4'>
            <i className='bi bi-laptop'></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
