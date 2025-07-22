import React from 'react'
import './about.css'

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
      <section className='gallery'>
        <div><img src="/assets/photo_1_2025-07-22_14-06-38.jpg" alt="midnight coding session at the curve africa" /></div>
        <div><img src="/assets/photo_2_2025-07-22_14-06-38.jpg" alt="graduation group picture inside kora office" /></div>
        <div><img src="/assets/photo_3_2025-07-22_14-06-38.jpg" alt="me being awarded my certificate as a fully-fledged frontend developer" /></div>
        <div><img src="/assets/photo_4_2025-07-22_14-06-38.jpg" alt="me and my teammates for artisan aid and our team coordinator mr Joshua" /></div>
        <div><img src="/assets/photo_5_2025-07-22_14-06-38.jpg" alt="Me and one of our best female product desiger/ secret full stack developer" /></div>
        <div><img src="/assets/photo_6_2025-07-22_14-06-38.jpg" alt="Group graduation pictue in front of kora office" /></div>
      </section>
    </div>
  )
}

export default About
