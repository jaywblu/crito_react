import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNewsArticles } from '../NewsArticlesContext'
import PageTitleSection from '../components/PageTitleSection'
import NewsSection from '../components/NewsSection'

const NewsDetails = () => {
    const { id } = useParams()
    const { getArticleById, article, articles, clearArticle } = useNewsArticles()
    // const [ categories, setCategories ] = useState([])

    useEffect(() => {
        getArticleById(id)
        getNewsCategoriesCount()
        return () => clearArticle()
    }, [])
    
    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        const dateMonthStr = date.toLocaleString('en-us', {day: 'numeric', month:'short'})
        return `${dateMonthStr}, ${date.getFullYear()}`
    }

    const articleInfoDot = () => {
        return <span className='article-info-dot'></span>
    }

    const getRecentArticles = () => {
        let list = []
        if (articles.length) {
            for (let i = 0; i < 4; i++) {
                list.push(
                    <li key={i}>
                        <Link reloadDocument to={`/newsdetails/${articles[i].id}`}>
                            <h4>{articles[i].title}</h4>
                            <span>{formatDate(articles[i].published)}</span>
                        </Link>
                    </li>
                )
            }
        }
        return list
    }

    const getNewsCategoriesCount = () => {
        let categoryList = []
        let items = []
        articles.forEach((article, index) => {
            if (!categoryList.some((item) => item.category == article.category)) {
                categoryList.push(
                    {
                        category: article.category,
                        count: 1
                    }
                )
            } else {
                let existing = categoryList.findIndex((item) => item.category == article.category)
                categoryList[existing].count++
            }
        })
        categoryList.forEach((item, index) => {
            items.push(<li key={index}>
                <b>{item.category}</b>{` - ${item.count} Posts`}
            </li>)
        })
        console.log(categoryList);
        return items
    }

    const getCategoryPills = () => {
        let categories = []
        let items = []
        articles.forEach((article, index) => {
            if (!categories.includes(article.category)) {
                categories.push(article.category);
                items.push(<li key={index}><Link to={`/news/categories/`}>{article.category}</Link></li>)
            }
        })
        return items
    }

    return (
        <main>
            <PageTitleSection title="New & Articles" pageName="News"></PageTitleSection>
            {article ?
                <section id="newsArticleDetails" className='container margin-top-large padding-btm-small'>
                    <div className='grid-wrapper'>
                        <div id="articleColumn">
                            <div id='articleHeader'>
                                <h2>{article.title}</h2>
                                <p>{formatDate(article.published)}{articleInfoDot()}{article.category}{articleInfoDot()}{article.author}</p>
                            </div>
                            <div id="articleImage">
                                <img src={article.imageUrl} />
                            </div>
                            <div>
                                <p>{article.content}</p> 
                            </div>
                        </div>
                        <aside id="newsTools">
                            <input type="text" className='form-control color-grey' placeholder="Type to search news..." />
                            <div id="recentPosts">
                                <h3>Recent Posts</h3>
                                <ul>
                                    {getRecentArticles()}
                                </ul>
                            </div>
                            <div id="newsCategoriesSummary">
                                <h3>Categories</h3>
                                <ul>
                                    {getNewsCategoriesCount()}
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div id="newsCategories">
                        <ul>
                            {getCategoryPills()}
                        </ul>
                    </div>
                </section>
            : <section><p>'Loading'</p></section>}
            <NewsSection sectionClasses={"container padding-top-small padding-btm-large bg-secondary"}></NewsSection>
        </main>
    )
}

export default NewsDetails