import React from 'react'
//import NavBar from '../Navbar'
import HeroSection from '../../components/HeroSection'
import ActivitySection from '../../components/ActivitySection'
import TrendingSection from '../../components/TrendingSection'
import Cta from '../../components/CtaSection'
import DonationProcessSection from '../../components/DonationProcessSection'



import NavBar from '../../components/common/Navbar'
import FrequentlyAsked from '../../components/frequentlyask'
import Footer from '../../components/common/footer'
const HomePage = () => {
  return (
      <div>
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
