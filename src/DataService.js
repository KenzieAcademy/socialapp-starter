import axios from 'axios';




class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
        this.token = JSON.parse(localStorage.getItem('login'))
    }

    //users

    registerUser(userData) {
        return this.client.post(this.url + "/users/", userData)

    }
    updateUser(userData, userName) {
        return this.client.patch(this.url + `${"/users/"}${userName}`, userData, {
            headers: {

                Authorization: "Bearer " + this.token.result.token
            }
        })

    }
    deleteUser(userName) {
        return this.client.delete(this.url + '/users/' + userName, {
            headers: {

                Authorization: "Bearer " + this.token.result.token
            }
        })

    }

    getUser(userName){
        return this.client.delete(this.url + '/users/' + userName)

    }

    //messages

    createMessage(message) {
        return this.client.post(this.url + '/messages', message, {
            headers: {

                Authorization: "Bearer " + this.token.result.token
            }
        })

    }
    getMessages() {
        return this.client.get(this.url + '/messages?limit=20').then(response => { return response.data.messages })


    }

    deleteMessage(messageId) {
        return this.client.delete(this.url + '/messages/' +  messageId , {
            headers: {
                Authorization: "Bearer " + this.token.result.token
            }
        })
    }



    //likes
    likeMessage(messageId) {
        return this.client.post(this.url + '/likes', { messageId }, {
            headers: {
                Authorization: "Bearer " + this.token.result.token
            }
        })

    }

    deleteLike(likeId) {
        return this.client.post(this.url + '/likes/', { likeId }, {
            headers: {
                Authorization: "Bearer " + this.token.result.token
            }
        })

    }













}
export default DataService;