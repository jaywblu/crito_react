import React from 'react'

import img_IconExcellence from "../assets/images/icon-excellence.svg"
import img_IconStrategic from "../assets/images/icon-strategic.svg"
import img_IconExperience from "../assets/images/icon-experience.svg"
import img_IconAI from "../assets/images/icon-ai.svg"
import img_ChooseUs from "../assets/images/choose-us-image.jpg"

const WhyChooseUsSection = () => {
  return (
    <section id="whyChooseUs" className="container margin-top-small margin-btm-large">
        <div className="row">
            <div className="col">
                <span className="section-title">Why Choose Us</span>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <ul id="chooseUsHighlights">
                    <li>
                        <div className="list-image">
                            <img src={img_IconExcellence} />
                        </div><div className="list-text">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-image">
                            <img src={img_IconStrategic} />
                        </div><div className="list-text">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-image">
                            <img src={img_IconExperience} />
                        </div><div className="list-text">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-image">
                            <img src={img_IconAI} />
                        </div><div className="list-text">
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col image-with-backdrop">
                <img src={img_ChooseUs} alt="Two women at an office table, talking while holding a tablet" />
                <span className="image-backdrop"></span>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUsSection