import React from 'react'

import img_AboutImage from '../assets/images/about-image.jpg'
import ButtonLink from '../utils/ButtonLink'

const AboutSection = () => {
  return (
    <section id="aboutCompany" className="container margin-top-large margin-btm-large">
        <div className="grid-wrapper">
            <div className="grid-box">
                <div className="image-with-card">
                    <div className="wavy"></div>
                    <img src={img_AboutImage} alt="Picture of Samantha Brown, founder of Crito" />
                    <div className="image-card">
                        <b>Samantha Brown, <span>Founder</span></b>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
            </div>
            <div className="grid-box">
                <span className="section-title">About Company</span>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="button-row">
                    <ButtonLink color="dark" text="Learn More" url="/about"></ButtonLink>
                    <button type="button" className="btn btn-round"><i className="fa-solid fa-play"></i><div className="btn-outside-text"><span>Intro Video</span></div></button>
                </div>                        
            </div>
        </div>
    </section>
  )
}

export default AboutSection