import axios from 'axios'
import { store } from "./redux"

class DataService {
    constructor(url = 'http://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }


    getUsername() {
        const { username } = store.getState().auth.login.result
        return username
    }
    registerUser(userData) {
        return this.client.post(this.url + "/users", userData);
    }

    updateUser(userData) {
        const loginData = JSON.parse(localStorage.getItem('login')).result
        let token = loginData.token
        let username = loginData.username
        let url = this.url + "/users/" + username
        return this.client.patch(url, userData,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
    }


    getUser() {
        const loginData = JSON.parse(localStorage.getItem('login')).result
        const username = loginData.username
        return this.client.get(this.url + "/users/" + username)
    }
    deleteUser() {
        console.log("attempting to delete user")
        const loginData = JSON.parse(localStorage.getItem('login')).result
        let token = loginData.token
        let username = loginData.username
        let url = this.url + "/users/" + username
        return this.client.delete(url,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
    }

    postMessages(message) {
        const loginData = JSON.parse(localStorage.getItem('login')).result
        let token = loginData.token
        let url = this.url + "/messages"
        return this.client.post(url, message,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
    }

    getMessages() {
        return this.client.get(this.url + "/messages?limit=100")  //Limit 100 messages
    }

    deleteMessage(messageID) {
        const loginData = JSON.parse(localStorage.getItem('login')).result
        let token = loginData.token
        let url = this.url + "/messages/" + messageID
        return this.client.delete(url, messageID,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
    }

    likePost(messageId) {
        const requestBody = { messageId }
        const loginData = JSON.parse(localStorage.getItem('login')).result
        let token = loginData.token
        let url = this.url + "/likes"
        return this.client.post(url, requestBody,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
    }



}


export default DataService