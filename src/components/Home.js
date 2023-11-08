import React from 'react'
import ShowcaseSection from './ShowcaseSection'
import PartnersSection from './PartnersSection'
import FeaturesSection from './FeaturesSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'

const Home = () => {
  return (
    <main>
        <ShowcaseSection></ShowcaseSection>
        <PartnersSection></PartnersSection>
        <FeaturesSection></FeaturesSection>
        <AboutSection></AboutSection>
        <ServicesSection></ServicesSection>
    </main>
  )
}

export default Home