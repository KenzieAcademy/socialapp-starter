//import the axios HTTP client to communicate with the API
import axios from 'axios';

class dataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }

    registerUser(userData) {
        return this.client.post(this.url + '/users', userData)
    }

    loginUser(userData2) {
        return this.client.post(this.url + '/auth/login', userData2)
    }

    getUsers() {
        return this.client.get(this.url + '/users')
    }

    deleteUser(userData3) {
        console.log(userData3.token)
        return this.client.delete(this.url + '/users/' + userData3.username, {
            headers: { Authorization: "Bearer " + userData3.token}
          })
    }

    // deleteUser = (userData3) => {

    // }


    getProfile(userData4) {
        return this.client.get(this.url + '/users/' + userData4, userData4)
    }
}

export default dataService;