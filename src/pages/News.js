import React, { useEffect, useState} from 'react'
import Header from '../components/Header'

const News = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch("https://win23-assignment.azurewebsites.net/api/articles")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <main>News</main>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </>
    )
}

export default News