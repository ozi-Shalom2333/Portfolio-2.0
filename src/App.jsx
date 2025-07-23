import React from 'react'
import Header from './components/header/Header'
import HeroIntro from './components/hero1/HeroIntro'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
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
