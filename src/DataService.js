import axios from 'axios'

class DataService {
    constructor(url = 'http://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
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

    deleteUser(userData) {
        const loginData = JSON.parse(localStorage.getItem('login')).result
        let token = loginData.token
        let username = loginData.username
        let url = this.url + "/users/" + username
        return this.client.delete(url, userData,
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

    likePost(messageID) {
        // Insert API call here
    }

    setUserPicture(userPicture) {
        // Insert API call here
    }

    getUser() {
        const loginData = JSON.parse(localStorage.getItem('login')).result
        const username = loginData.username
        return this.client.get(this.url + "/users/" + username)
    }
    
}

export default DataService