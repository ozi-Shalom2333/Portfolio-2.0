import React from 'react'
import Header from './components/header/Header'
import HeroIntro from './components/hero1/HeroIntro'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'


const App = () => {
  return (
    <div className='App'>
      <Header />
      <HeroIntro/>
      <About />
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
