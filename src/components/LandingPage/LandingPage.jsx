import React from 'react'
import HeroSection from './HeroSection'
import Header from './Header'
import AboutSection from './AboutSection'
import FaQ from './FaQ'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FaQ />
      <Footer />
    </div>
  )
}

export default LandingPage
