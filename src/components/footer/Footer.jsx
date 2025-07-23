// src/components/Footer.jsx
import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Ozinoir</h3>

        <div className="footer-icons">
          <a href="https://github.com/ozi-Shalom2333" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:okaozisol45@gmail.com">
            <MdEmail />
          </a>
          <a href="https://www.linkedin.com/in/ozioma-okafor-111006329/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} Ozinoir. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
