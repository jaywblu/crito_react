import React from 'react'
import ServiceComponent from './ServiceComponent'

const servicesList = [
    {title: "Business Advice", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/business-advice"},
    {title: "Startup Business", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/startup-business"},
    {title: "Financial Advice", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/financial-advice"},
    {title: "Business Advice", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkUrl: "/services/risk-management"}
]

const ServicesSection = () => {
  return (
    <section id="services" className="container padding-top-large padding-btm-large">
        <span className="section-title">Our Services</span>
        <h2>We Provide The Best Service For Consulting</h2>
        <div className="grid-wrapper">
            {
                servicesList.map((service, index) => (
                    <ServiceComponent key={index} title={service.title} desc={service.desc} linkUrl={service.linkUrl}></ServiceComponent>
                ))
            }
        </div>
        <div className="button-row">
            <button type="button" className="btn btn-secondary">Browse Services<i className="icon link-icon"></i></button>
        </div>
    </section>
  )
}

export default ServicesSection