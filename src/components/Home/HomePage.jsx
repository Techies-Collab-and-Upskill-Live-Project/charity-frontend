import React from 'react'
//import NavBar from '../Navbar'
import HeroSection from './HeroSection'
import ActivitySection from './ActivitySection'
import TrendingSection from './TrendingSection'
import Cta from './CtaSection'
import DonationProcessSection from './DonationProcessSection'



import NavBar from '../Navbar' 
import FrequentlyAsked from '../frequentlyask'
import Footer from '../footer'
const HomePage = () => {
  return (
      <di>
      <NavBar />
      <HeroSection />
      <ActivitySection />
      <TrendingSection />
      <Cta />
      <DonationProcessSection/>
      <FrequentlyAsked />
      <Footer />
    </div>
  )
}

export default HomePage
