//import the axios HTTP client to communicate with the API
import axios from 'axios';
import { login } from './redux/stateReducers/auth';

class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }

    registerUser(userData) {
        return this.client.post(this.url + '/users', userData)
    }

    getUsers() {
        return this.client.get(this.url + '/users')
    }

    postMessage(messageData) {
        console.log(messageData.text);
        return this.client.post(this.url + '/messages', { text: messageData.text }, {
            headers: { Authorization: "Bearer " + messageData.token }
        })

    }

    deleteMessage(messageData) {
        return this.client.delete(this.url + '/messages' + messageData.id, {
            headers: { Authorization: "Bearer " + messageData.token }
        } )
    }


}

export default DataService;