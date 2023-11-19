const apiUrl = "https://win23-assignment.azurewebsites.net/api"

export const getNewsArticles = () => {
    return fetch(apiUrl + "/articles")
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const getArticleById = (id) => {
    return fetch(apiUrl + "/articles/" + id)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const getArticlesByAmount = (amount) => {
    return fetch(apiUrl + "/articles?take=" + amount)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const submitContactForm = (body) => {
    return fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
        method: 'post',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}