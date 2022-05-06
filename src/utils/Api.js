const onResponse = (response) => {
    return response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`);
}

const onError = (err) => {
    alert("Что-то пошло не так!");
}
class Api {
    constructor({ baseUrl, token, headers }) {
        this._baseUrl = baseUrl;
        // this._token = `Bearer ${token}`;
        this.headers = headers;
    }
    //ПОСТЫ
    // поиск постов
    searchPosts(searchQuery) {
        return fetch(`${this._baseUrl}/posts/search/?query=${searchQuery}`, {
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    } 
    // получение всех постов-------------------------------------------------
    getAllPosts() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // получение поста по id
    getPostById(postId) {
        return fetch(`${this._baseUrl}/posts/${postId}`, {
            headers: this.headers,
        }).then(onResponse)
    }
    // создание нового поста
    createNewPost(userData) {
        return fetch(`${this._baseUrl}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(userData),
        }).then(onResponse)
            .catch(onError)
    }
    // редактирование текущего поста
    editPostById(postId , postData) {
        return fetch(`${this._baseUrl}/posts/${postId}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(postData),
        }).then(onResponse)
            .catch(onError)
    }
    // удаление поста по id
    deletePostById(postId) {
        return fetch(`${this._baseUrl}/posts/${postId}`, {
            method: "DELETE",
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // установка/снятие лайка по id
    changeLikeStatus(postId, isLike) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // получение всех комментариев
    getAllComments() {
        return fetch(`${this._baseUrl}/posts/comments/`, {
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // получение комментариев конкретного поста
    getCommentById(postId) {
        return fetch(`${this._baseUrl}/posts/comments/${postId}`, {
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // добавление комментария по id
    addNewCommentById(postId, commentData) {
        return fetch(`${this._baseUrl}/posts/comments/${postId}`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(commentData),
        }).then(onResponse)
            .catch(onError)
    }    
    // удаление комментария по id
    deleteComment(postId, commentId) {
        return fetch(`${this._baseUrl}/posts/comments/${postId}/${commentId}`, {
            method: "DELETE",
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }


    //-----------------------------------------------------------------------

    //ПОЛЬЗОВАТЕЛЬ
    //получение всех пользователей-------------------------------------------
    getAllUsers() {
        return fetch(`${this._baseUrl}/users`, {
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // получение информации о пользователе по токену в заголовках
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // получение информации о пользователе по его id
    getUserInfoById(userId) {
        return fetch(`${this._baseUrl}/users/${userId}`, {
            headers: this.headers,
        }).then(onResponse)
            .catch(onError)
    }
    // изменение name и about
    changeNameAndAbout(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(dataUser),
        }).then(onResponse)
            .catch(onError)
    }
    // изменение avatar
    changeAvatar(dataAvatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(dataAvatar),
        }).then(onResponse)
            .catch(onError)
    }
    //---------------------------------------------------------------------
}

const config = {
    baseUrl: "https://api.react-learning.ru",
    // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYzAiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.rq4mXFpJ4lWkc1AYX9nFD6ygAtTjLdLs2l3cXmHcRRg",
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYzAiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.rq4mXFpJ4lWkc1AYX9nFD6ygAtTjLdLs2l3cXmHcRRg',
        'Content-Type': 'application/json'
    }
}

const api = new Api(config);
export default api;