import axios from 'axios';

class dataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
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
        return this.client.get(this.url + '/messages')
    }

    postLike(userData3) {
        return this.client.post(this.url + '/likes', {headers: { Authorization: "Bearer " + userData3.token}
    })
    }
}

export default dataService;