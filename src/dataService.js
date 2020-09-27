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

    loginUser(userData) {
        return this.client.post(this.url + '/auth/login', userData)
    }

    getUsers() {
        return this.client.get(this.url + '/users')
    }

    // getMessages() {
    //     return this.client.get(this.url + '/messages')
    // }

    postMessage(messageData) {
        console.log(messageData.text);
        return this.client.post(this.url + '/messages', { text: messageData.text }, {
            headers: { Authorization: "Bearer " + messageData.token }
        })

    }

    deleteMessage(messageData2) {
        console.log(messageData2.id);
        return this.client.delete(this.url + '/messages/' + messageData2.id, {
            headers: { Authorization: "Bearer " + messageData2.token }
        })
    }


    // ------------------------below this line may be deleted


    //  returns a promise for the messages array
    getRecentMessages() {
        return this.client
        .get(this.url + "/messages?limit=20")
        .then(response => {
            return response.data.messages
        })
    }


    // ------------------------above this line may be deleted
}

export default DataService;

