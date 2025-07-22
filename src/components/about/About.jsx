import React from 'react'
import './about.css'
import { useState } from 'react'
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

const About = () => {
  const img1 = "/assets/photo_1_2025-07-22_14-06-38.jpg"
  const img2 = "/assets/photo_2_2025-07-22_14-06-38.jpg"
  const img3 = "/assets/photo_3_2025-07-22_14-06-38.jpg"
  const img4 = "/assets/photo_4_2025-07-22_14-06-38.jpg"
  const img5 = "/assets/photo_5_2025-07-22_14-06-38.jpg"
  const img6 = "/assets/photo_6_2025-07-22_14-06-38.jpg"
  const images = [img1, img2, img3, img4, img5, img6]

 const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

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
      <div className="carousel">
         <img
          src={images[currentIndex]}
          alt={`curve-africa-${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className="carousel-buttons">
          <button onClick={handlePrev}>
            <HiArrowSmLeft />
          </button>

          <button onClick={handleNext}>
            <HiArrowSmRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
