import React from 'react'
import { Link } from 'react-router-dom'

import img_ButtonArrow from "../assets/images/button-arrow.svg"

const CaseStudyComponent = ({imgUrl, imgDesc, title}) => {
  return (
    <Link to="#">
        <div className="grid-box">
            <img className="case-image" src={imgUrl} alt={imgDesc} />
            <h3>{title}</h3>
            <span>Read more<img src={img_ButtonArrow} /></span>
        </div>
    </Link>
  )
}

export default CaseStudyComponent