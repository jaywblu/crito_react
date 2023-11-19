import { createContext, useContext, useEffect, useState } from "react";
import * as ApiHandler from "./ApiHandler"

const NewsArticlesContext = createContext()
export const useNewsArticles = () => useContext(NewsArticlesContext)

export const TestProvider = ({children}) => {

    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getAllArticles()
    }, [])

    const getAllArticles = async () => {
        ApiHandler.getNewsArticles().then(response => setArticles(response)).catch(error => console.log(error))
    }

    const getArticleById = async (id) => {
        ApiHandler.getArticleById(id).then(response => setArticle(response)).catch(error => console.log(error))
    }

    const clearArticle = () => {
        setArticle(null)
    }

    return (
        <NewsArticlesContext.Provider value={{articles, article, getAllArticles, getArticleById, clearArticle}}>
            {children}
        </NewsArticlesContext.Provider>
    )

}