import React from 'react'
import { Link } from 'react-router-dom'

const ServiceComponent = ({linkUrl, title, desc}) => {
  return (
    <Link to={linkUrl}>
        <div className="services-card">
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="circle-arrow"></div>
        </div>
    </Link>
  )
}

export default ServiceComponent