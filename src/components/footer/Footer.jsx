import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="800">
      <div className="footer-content" data-aos="fade-up" data-aos-delay="200">
        <h3 className="footer-logo">Ozinoir</h3>

        <div className="footer-icons" data-aos="zoom-in" data-aos-delay="400">
          <a href="https://github.com/ozi-Shalom2333" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:okaozisol45@gmail.com"><MdEmail /></a>
          <a href="https://www.linkedin.com/in/ozioma-okafor-111006329/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      <p className="footer-bottom" data-aos="fade-up" data-aos-delay="600">
        &copy; {new Date().getFullYear()} Ozinoir. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
