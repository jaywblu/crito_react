import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
    const {id} = useParams()
    const [article, setArticle] = useState({})
    console.log(id)
    useEffect(() => {
        const getArticleById = () => {
            fetch("https://win23-assignment.azurewebsites.net/api/articles/" + id)
                .then(response => response.json())
                .then(json => setArticle(json))
                .catch(error => console.log(error))
        }
        getArticleById()
    }, [])
    return (
        <>
            <main>
                {article ? article.content : 'Loading'}
            </main>
        </>
    )
}

export default NewsDetails