import './about.css'
import ImageCarousel from './ImageCarousel'

const About = () => {
  return (
    <div className='about' id='about' data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="fade-right" data-aos-delay="200">About Me</h1>
      <div className='about-content' data-aos="fade-up" data-aos-delay="400">
        <p data-aos="fade-up" data-aos-delay="600">
          Hey there! Ozinoir here, a passionate and self-driven Frontend Developer from Ajegunle, Lagos. I recently completed a 6-month intensive tech training at <strong>The Curve Africa</strong>, where I deepened my skills in HTML, CSS, and JavaScript.
        </p>
        <p data-aos="fade-up" data-aos-delay="800">
          I started out building simple pages and now I'm chasing bigger dreams: becoming a full-stack developer, a product designer, and eventually a content creator who inspires others through tech. I’m currently improving my JavaScript and React skills, while also learning UI/UX design. Everything you see on this portfolio was built by me with dedication, grit, and love. Beyond code, I’m all about growth — personal, spiritual, and professional. I may come from a rough background, but I’m not letting that define me. I dream big and build daily.
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1000"><ImageCarousel/></div>
    </div>
  )
}

export default About
