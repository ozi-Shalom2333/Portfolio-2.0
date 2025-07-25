
import './heroIntro.css';
import { Link } from 'react-scroll';


const HeroIntro = () => {
  return (
    <div className='hero-intro' id='hero'>
      <div>
        <div className='floating-image' data-aos="zoom-in"  data-aos-duration="1200">
          <img src="/assets/pic.jpg" alt="a picture of me" />
        </div>

        <div className='description' data-aos="fade-up" data-aos-delay="200">
          <p className='mini' data-aos="fade-down" data-aos-delay="300" >
            Your Minimalist and Elegant Frontend developer
          </p>

          <div className='hero-text' data-aos="fade-up" data-aos-delay="500">
            <h1>Crafting Exceptional</h1>
            <p>
              As a frontend developer, I strive to create visually stunning and highly functional websites that captivate users. My portfolio showcases a range of projects that highlight my expertise in modern web technologies, attention to detail, and my commitment to delivering elegant, responsive user interfaces.
            </p>
          </div>

          <Link to="projects" smooth={true} duration={500}  offset={-70} >
            <button className="cta-btn" data-aos="zoom-in"  data-aos-delay="700" data-aos-duration="800">
              View My Work
            </button>
          </Link>
{/* 
          <Link to="about" smooth={true} duration={600} offset={-70} className="scroll-down">
            <FaChevronDown className="scroll-icon" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="600"/>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
