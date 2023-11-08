import React from 'react'

const ServiceComponent = ({linkUrl, title, desc}) => {
  return (
    <a href={linkUrl}>
        <div className="services-card">
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="circle-arrow"></div>
        </div>
    </a>
  )
}

export default ServiceComponent