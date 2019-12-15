import fetch from './handler';


export const getComments = () => {
    return fetch({
        method: 'GET',
        url : "http://localhost:8080/comments",
    });
}

export const getPosts = () => {
    return fetch({
        method: 'GET',
        url : "http://localhost:8080/posts",
    });
}

export const postComment = (body) => {
    return fetch({
        method: 'POST',
        url : "http://localhost:8080/comments",
        body : body,
        headers: {'Content-Type': 'application/json'},
    })
}

export const postPost = (body) => {
    return fetch({
        method: 'POST',
        url : "http://localhost:8080/posts",
        body : body,
        headers: {'Content-Type': 'application/json'},
    })
}

export const putPost =  (body) => {
    return fetch({
        method : 'PUT',
        url : `http://localhost:8080/posts/${body.id}`,
        body: body,
        headers: {'Content-Type': 'application/json'},
    })
}