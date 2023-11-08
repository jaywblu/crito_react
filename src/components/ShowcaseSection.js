import React from 'react'

import img_ShowCase from '../assets/images/showcase-image.png'

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="container">
        <div className="row">
            <div className="col col-sm-12 lg-7 xl-7 padding-top-small padding-btm-small">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <button type="button" className="btn btn-primary">Get Consulting<i className="icon link-icon"></i></button>
                <button type="button" className="btn btn-secondary">Learn More<i className="icon link-icon"></i></button>
            </div>
            <div id="showcaseImage" className="col lg-5 xl-5">
                <img src={img_ShowCase} alt="A man holding a tablet"/>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection