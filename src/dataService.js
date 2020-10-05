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

    getProfile(userData4) {
        console.log(userData4.token);
        return this.client.get(this.url + '/users/' + userData4.username , {
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

    getRecentMessages() {
        return this.client
            .get(this.url + "/messages")
            .then(response => {
                return response.data.messages
            })
    }

    deleteMessage(messageData2) {
        console.log(messageData2);
        console.log(messageData2.token);
        return this.client.delete(this.url + '/messages/' + messageData2.id, {
            headers: { Authorization: "Bearer " + messageData2.token }
        })
    }

postMessage(messageData) {
    console.log(messageData.text);
    return this.client.post(this.url + '/messages', { text: messageData.text }, {
        headers: { Authorization: "Bearer " + messageData.token }
    })
}
}





export default DataService;
