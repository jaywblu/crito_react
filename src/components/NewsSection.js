import React, { useEffect, useState } from 'react'
import * as ApiHandler from '../ApiHandler'

import NewsArticleComponent from './NewsArticleComponent'
import ButtonLink from '../utils/ButtonLink'

const NewsSection = ({sectionClasses}) => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const getNews = (amount) => (ApiHandler.getArticlesByAmount(amount).then(response => setNews(response)).catch(error => console.log(error)))
        getNews(3)
    }, [])

    return (
        <section id="articlesNews" className={sectionClasses}>
            <div className="row header-button-split">
                <div className="col">
                    <span className="section-title">Articles & News</span>
                    <h2>Get Every Single Article & News</h2>
                </div>
                <div className="col">
                    <ButtonLink color="transparent" text="Browse Articles" url="/news"></ButtonLink>
                </div>
            </div>
            <div className="grid-wrapper">
                {
                    news.length > 0 ? news.map(article => (
                            <NewsArticleComponent 
                                key={article.id} 
                                id={article.id} 
                                title={article.title} 
                                content={article.content} 
                                author={article.author} 
                                published={article.published} 
                                category={article.category} 
                                imageUrl={article.imageUrl}>
                            </NewsArticleComponent>
                        )
                    )
                    : "Loading news..."
                }
            </div>
            <div className="pagination">
                <div className="page-item active-page"></div>
                <div className="page-item"></div>
                <div className="page-item"></div>
                <div className="page-item"></div>
                <div className="page-item"></div>
            </div>
        </section>
    )
}

export default NewsSection