import React from 'react'
import { Link } from 'react-router-dom'

const NewsArticleComponent = ({id, title, content, author, published, category, imageUrl}) => {
  return (
    <div className="article-card grid-box">
        <Link to={`/newsdetails/${id}`}>
            <div className="article-image">
                <img src={imageUrl} />
                <div className="article-date">
                    <h3>24</h3>
                    <p>Mar</p>
                </div>
            </div>
            <div className="article-category">
                {category}
            </div>
            <div className="article-description">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </Link>
    </div>
  )
}

export default NewsArticleComponent