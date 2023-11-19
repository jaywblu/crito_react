import React from 'react'
import { Link } from 'react-router-dom'

const FeatureComponent = ({imgUrl, title, desc, linkUrl}) => {
  return (
    <Link to={linkUrl}>
        <div className="grid-box">
          <img src={imgUrl} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
    </Link>
  )
}

export default FeatureComponent