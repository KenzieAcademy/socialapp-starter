//import the axios HTTP client to communicate with the API
import axios from 'axios';
<<<<<<< HEAD

class dataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
=======
import { login } from './redux/stateReducers/auth';

class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
>>>>>>> lesa-branch
        this.url = url;
        this.client = client;
    }

<<<<<<< HEAD
=======
    // registerUser(registrationData) {
    //     return this.client.post(this.url + "/users", registrationData);
    // }

>>>>>>> lesa-branch
    registerUser(userData) {
        return this.client.post(this.url + '/users', userData)
    }

<<<<<<< HEAD
    loginUser(userData) {
        return this.client.post(this.url + '/auth/login', userData)
    }

=======
>>>>>>> lesa-branch
    getUsers() {
        return this.client.get(this.url + '/users')
    }

<<<<<<< HEAD
    deleteUser(userData) {
        return this.client.delete(this.url + '/users/' + userData, userData)
    }
}

export default dataService;
=======
    postMessage(messageData) { 
        console.log(messageData.text);
        return this.client.post(this.url + '/messages', {text: messageData.text}, {
        headers: { Authorization: "Bearer " + messageData.token}
          })

    }

}

export default DataService;
>>>>>>> lesa-branch
