import React from 'react'
import './heroIntro.css'
import { Link } from 'react-scroll';

const HeroIntro = () => {
  return (
    <div className='hero-intro' id='hero'>
      <div >
        <div className='floating-image'>
            <img src="/assets/pic.jpg" alt="a picture of me" />
        </div>
        <div className='description'>
            <p className='mini'>Your Minimalist and Elegant Frontend developer</p>
            <div className='hero-text'>
              <h1>Crafting Exceptional</h1>
              <p>
                As a frontend developer, I strive to create visually stunning and highly functional websites that captivate users. My portfolio showcases a range of projects that highlight my expertise in modern web technologies, attention to detail, and my commitment to delivering elegant, responsive user interfaces.
              </p>
            </div>
            <Link to="projects" smooth={true} duration={500} offset={-70} >
            <button className="cta-btn">View My Work</button>
            </Link>
        </div>
      </div>
      
    </div>
  )
}

export default HeroIntro
