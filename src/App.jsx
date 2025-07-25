import Header from './components/header/Header'
import React, { useEffect } from 'react';
import HeroIntro from './components/hero1/HeroIntro'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
   
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });
}, []);

  return (
    <div className='App'>
      <Header />
      <HeroIntro/>
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
