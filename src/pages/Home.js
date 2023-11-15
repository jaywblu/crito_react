import React from 'react'
import ShowcaseSection from '../components/ShowcaseSection'
import PartnersSection from '../components/PartnersSection'
import FeaturesSection from '../components/FeaturesSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Header from '../components/Header'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import MeetOurTeamSection from '../components/MeetOurTeamSection'
import TestimonialsSection from '../components/TestimonialsSection'
import NewsSection from '../components/NewsSection'
import SubcribeSection from '../components/SubcribeSection'

const Home = () => {
  return (
    <>
      {/* <Header></Header> */}
      <main>
          <ShowcaseSection></ShowcaseSection>
          <PartnersSection></PartnersSection>
          <FeaturesSection></FeaturesSection>
          <AboutSection></AboutSection>
          <ServicesSection></ServicesSection>
          <WhyChooseUsSection></WhyChooseUsSection>
          <CaseStudiesSection></CaseStudiesSection>
          <MeetOurTeamSection></MeetOurTeamSection>
          <TestimonialsSection></TestimonialsSection>
          <NewsSection></NewsSection>
          <SubcribeSection></SubcribeSection>
      </main>
    </>
  )
}

export default Home