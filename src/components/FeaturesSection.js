import React from 'react'
import FeatureComponent from './FeatureComponent'

import img_BusinessAdvice from '../assets/images/business-advice.svg'
import img_StartupBusiness from '../assets/images/startup-business.svg'
import img_FinancialAdvice from '../assets/images/financial-advice.svg'
import img_RiskManagement from '../assets/images/risk-management.svg'
import ButtonLink from '../utils/ButtonLink'

const featuresList = [
    {imgUrl: img_BusinessAdvice, title: "Business Advice", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/business-advice"},
    {imgUrl: img_StartupBusiness, title: "Startup Business", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/startup-business"},
    {imgUrl: img_FinancialAdvice, title: "Financial Advice", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/financial-advice"},
    {imgUrl: img_RiskManagement, title: "Business Advice", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/risk-management"}
]

const FeaturesSection = () => {
  return (
    <section id="features" className="container">
        <div className="border-box">
            <div className="grid-wrapper">
                <div className="grid-box">
                    <span className="section-title">Features</span>
                    <h2>Our accounting is
                        trusted by thousands
                        of companies</h2>
                    <ButtonLink color="primary" text="Learn More" url="/features"></ButtonLink>
                </div>
                <div id="featuresGrid" className="grid-box">
                    <div className="grid-wrapper">
                        {
                            featuresList.map((feature, index) => (
                                <FeatureComponent key={index} imgUrl={feature.imgUrl} title={feature.title} desc={feature.desc} linkUrl={feature.linkUrl}></FeatureComponent>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection