import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <p>&copy; 2025 DIVYA ATTARDE. All rights reserved.</p>
      <p>
        Follow me on{' '}
        <a href="https://linkedin.com/in/divya-attarde" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>{' '}
        and{' '}
        <a href="https://www.github.com/divyx09" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
