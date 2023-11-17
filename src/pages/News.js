import React, { useEffect, useState } from 'react'
import NewsArticleComponent from '../components/NewsArticleComponent'

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const getNewArticles = () => {
            fetch("https://win23-assignment.azurewebsites.net/api/articles")
                .then(response => response.json())
                .then(json => setNews(json))
                .catch(error => console.log(error))
        }
        const interval = setInterval(() => {
            getNewArticles()
        }, 60000)
        getNewArticles()
        return () => clearInterval(interval)
    }, [])
    

    return (
        <main>
            <section id="articlesNews" className="container margin-top-large margin-btm-large">
                <div className="grid-wrapper">
                    {news.length > 0 ? news.map(article => (
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
                        ))
                        : 'Loading news...'
                    }
                </div>   
            </section>
        </main>
    )
}

export default News