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

    deleteUser(userData) {
        return this.client.delete(this.url + '/users/' + userData, userData)
    }
}

export default dataService;
