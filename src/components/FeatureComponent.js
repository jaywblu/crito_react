import React from 'react'

const FeatureComponent = ({imgUrl, title, desc, linkUrl}) => {
  return (
    <a href={linkUrl}>
        <div className="grid-box">
          <img src={imgUrl} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
    </a>
  )
}

export default FeatureComponent