import React, { useEffect, useState } from 'react'
import NewsArticleComponent from '../components/NewsArticleComponent'
import SubcribeSection from '../components/SubcribeSection'
import PageTitleSection from '../components/PageTitleSection'
import { useNewsArticles } from '../NewsArticlesContext'

const News = () => {
    const { getAllArticles, articles } = useNewsArticles()
    const [page, setPage] = useState(1)
    const articleAmount = 6
    useEffect(() => {
        console.log(articles)
        getAllArticles()
    }, [])

    const filterArticlesByPage = (index) => {
        console.log(page)
        const maxIndex = (page*articleAmount)
        return (index >= maxIndex-articleAmount && index < maxIndex)
    }

    const getPages = () => {
        let list = []
        let noOfPages = Math.ceil(articles.length/articleAmount)
        for (let i = 0; i < noOfPages; i++) {
            list.push(<li key={i}>{i+1}</li>)
        }
        return list
    }

    const goToPage = (pageNumber) => {
        setPage(() => {
            return pageNumber
        })
    }

    const prevPage = () => {
        setPage(() => {
            if (page > 1) {
                return page-1
            }
            return page
        })
    }

    const nextPage = () => {
        setPage(() => {
            if (page < Math.ceil(articles.length/articleAmount)) {
                return page+1
            }
            return page
        })
    }
    
    return (
        <main>
            <PageTitleSection title="News & Articles" pageName="News"></PageTitleSection>
            <section id="articlesNews" className="container padding-top-large padding-btm-large">
                <h2>Our News & Articles</h2>
                <div className="grid-wrapper">
                    {articles.length > 0 ? articles.filter((item, index) => filterArticlesByPage(index)).map(article => (
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
            <div className='paginator'>
                <ul>
                    <li><button onClick={prevPage}>Prev</button></li>
                    {getPages()}
                    <li><button onClick={nextPage}>Next</button></li>
                </ul>
            </div>
            <SubcribeSection></SubcribeSection>
        </main>
    )
}

export default News