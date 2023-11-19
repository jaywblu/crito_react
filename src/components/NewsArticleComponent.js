import React from 'react'
import { Link } from 'react-router-dom'

const NewsArticleComponent = ({id, title, content, author, published, category, imageUrl}) => {

    const getDate = (dateStr) => {
        const date = new Date(dateStr)
        const day = date.getDate()
        const month = date.toLocaleString('en-us', {month:'short'})
        return (<div className="article-date">
                    <h3>{day}</h3>
                    <p>{month}</p>
                </div>)
    }

    return (
        <div className="article-card grid-box">
            <Link reloadDocument to={`/newsdetails/${id}`}>
                <div className="article-image">
                    <img src={imageUrl} />
                    {getDate(published)}
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