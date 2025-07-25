import { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-scroll'; 



const Header = () => {
   
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll down → hide
        setIsVisible(false);
      } else {
        // Scroll up → show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  

  return (
    <header className={`header ${isVisible ? 'show' : 'hide'}`}>
      <div className="header-logo">
        <img src="/assets/mylogo.png" alt="Company logo" />
      </div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
        {[
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
].map(({ label, to }) => (
  <Link
    key={label}
    to={to}
    smooth={true}
    duration={500}
    offset={-70} 
    spy={true}
    activeClass="active-tab"
  >
    <span onClick={() => setMenuOpen(false)}>{label}</span>
  </Link>
))}

        <button>Hire me</button>
      </nav>
    </header>
  );
};

export default Header;
