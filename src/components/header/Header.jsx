import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
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
        {['Home', 'About', 'Projects', 'Contacts'].map((tab) => (
          <span key={tab}>{tab}</span>
        ))}
        <button>Hire me</button>
      </nav>
    </header>
  );
};

export default Header;
