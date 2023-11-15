import React from 'react'

import img_CaseStudies_01 from "../assets/images/case-studies-img-1.png"
import img_CaseStudies_02 from "../assets/images/case-studies-img-2.png"
import img_CaseStudies_03 from "../assets/images/case-studies-img-3.png"
import img_CaseStudies_04 from "../assets/images/case-studies-img-4.png"
import CaseStudyComponent from './CaseStudyComponent'

const caseStudies = [
    {
        imgUrl: img_CaseStudies_01,
        imgDesc: "Someone reading a business newspaper",
        title: "Grow your business"
    },
    {
        imgUrl: img_CaseStudies_02,
        imgDesc: "A closed laptop on a table",
        title: "Why your client needs a responsive website"
    },
    {
        imgUrl: img_CaseStudies_03,
        imgDesc: "An open notepad and a pen",
        title: "Educate your employees to get better results"
    },
    {
        imgUrl: img_CaseStudies_04,
        imgDesc: "An open laptop showing business graphs",
        title: "Business Insights is a important piece of your business"
    }
]

const CaseStudiesSection = () => {
  return (
    <section id="caseStudies" className="container">
        <div id="caseStudiesHeader">
            <span className="section-title">Project & Case Studies</span>
            <h2>Let's Look At Our Global Projects</h2>
        </div>
        <div id="caseStudiesContent" className="grid-wrapper margin-btm-small">
            {
                caseStudies.map((caseStudy, index) => (
                    <CaseStudyComponent key={index} imgUrl={caseStudy.imgUrl} imgDesc={caseStudy.imgDesc} title={caseStudy.title}></CaseStudyComponent>
                ))
            }
        </div>
        <div id="caseStudiesFooter">
            <button type="button" className="btn btn-dark">All Recent Projects<i className="icon link-icon-white"></i></button>
        </div>
    </section>
  )
}

export default CaseStudiesSection