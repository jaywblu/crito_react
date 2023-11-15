import React from 'react'

const getReviewScore = (score) => {
    let content = [];
    for (let i = 0; i < score; i++) {
      content.push(<i className="fa-solid fa-star"></i>);
    }
    return content;
}

const TestimonialComponent = ({score, quote, imageUrl, name, businnesInfo}) => {
  return (
    <div className="grid-box">
        <span className="review-stars">
            {getReviewScore(score)}
            {/* <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i> */}
        </span>
        <p>{quote}</p>
        <div className="review-info">
            <img src={imageUrl} alt={`${name} - ${businnesInfo}`} />
            <h3>{name}</h3>
            <span>{businnesInfo}</span>
        </div>
    </div>
  )
}

export default TestimonialComponent