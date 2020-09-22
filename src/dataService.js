import axios from 'axios';
import { login } from './redux/stateReducers/auth';

class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }

    // registerUser(registrationData) {
    //     return this.client.post(this.url + "/users", registrationData);
    // }

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



postMessage(messageData) {
    console.log(messageData.text);
    return this.client.post(this.url + '/messages', { text: messageData.text }, {
        headers: { Authorization: "Bearer " + messageData.token }
    })
}
}





export default DataService;
