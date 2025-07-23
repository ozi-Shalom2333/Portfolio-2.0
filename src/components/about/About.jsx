import React from 'react'
import './about.css'
import ImageCarousel from './ImageCarousel'


const About = () => {
  
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='about-content'>
        <p>
          Hey there! Ozinoir here, a passionate and self-driven Frontend Developer
          from Ajegunle, Lagos. I recently completed a 6-month intensive tech
          training at <strong>The Curve Africa</strong>, where I deepened my skills in HTML,
          CSS, and JavaScript.
        </p>
        <p>
          I started out building simple pages and now I'm chasing bigger dreams:
          becoming a full-stack developer, a product designer, and eventually a
          content creator who inspires others through tech. I’m currently
          improving my JavaScript and React skills, while also learning UI/UX
          design. Everything you see on this portfolio was built by me with
          dedication, grit, and love. Beyond code, I’m all about growth — personal, spiritual, and
          professional. I may come from a rough background, but I’m not letting
          that define me. I dream big and build daily. 
        </p>
      </div>
      <ImageCarousel/>
    </div>
  )
}

export default About
