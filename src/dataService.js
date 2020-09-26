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


    postMessage(messageData) {
        console.log(messageData.text);
        return this.client.post(this.url + '/messages', { text: messageData.text }, {
            headers: { Authorization: "Bearer " + messageData.token }
        })

    }

    deleteMessage(messageData2) {
        console.log(messageData2);
        return this.client.delete(this.url + '/messages' + messageData2.messageId, {
            headers: { Authorization: "Bearer " + messageData2.token }
        })
    }

}


export default DataService;