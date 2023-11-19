import React from 'react'

import img_ShowCase from '../assets/images/showcase-image.png'
import ButtonLink from '../utils/ButtonLink'

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="container">
        <div className="row">
            <div className="col col-sm-12 lg-7 xl-7 padding-top-small padding-btm-small">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <ButtonLink color="primary" text="Get Consulting" url="/get-consulting"></ButtonLink>
                <ButtonLink color="secondary" text="Learn More" url="/learn-more"></ButtonLink>
            </div>
            <div id="showcaseImage" className="col lg-5 xl-5">
                <img src={img_ShowCase} alt="A man holding a tablet"/>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection