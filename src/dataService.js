import axios from 'axios';

class dataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }

    registerUser(userData) {
        return this.client.post(this.url + '/users', userData)
    }

    loginUser(userData) {
        return this.client.post(this.url + '/auth/login', userData)
    }

    getUsers() {
        return this.client.get(this.url + '/users')
    }

    getMessages() {
        return this.client
            .get(this.url + '/messages')
            .then(response => {
                return response.data.messages
            })
    }

    postLike(userData3) {
        console.log(userData3)
        return this.client.post(this.url + '/likes', { messageId: userData3.messageId }, {
            headers: { Authorization: "Bearer " + userData3.token }
        })
    }
}

export default dataService;