import React from 'react'
import Header from './components/header/Header'
import HeroIntro from './components/hero1/HeroIntro'
import About from './components/about/About'


const App = () => {
  return (
    <div className='App'>
      <Header />
      <HeroIntro/>
      <About />
    </div>
  )
}

export default App
