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
        
        return this.client.delete(this.url + '/users/' + userData3.username, {
            headers: { Authorization: "Bearer " + userData3.token}
          })
    }

    getProfile(userData4) {
        
        return this.client.get(this.url + '/users/' + userData4, {
            headers: { Authorization: "Bearer " + userData4.token}
          })
    }
   
    updateUser(userData5) {
        console.log(userData5)
        return this.client.patch(this.url + '/users/' + userData5.username, {
            password: userData5.password,
            about: userData5.about,
            displayName: userData5.displayName
        }, {
            headers: { Authorization: "Bearer " + userData5.token}
          })
    }
}

export default dataService;