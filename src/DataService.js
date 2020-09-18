import axios from 'axios';
class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }
    registerUser(registrationData) {
        return this.client.post(this.url + "/users", registrationData);
    }

    postMessage(message) {
        let authData = JSON.parse(localStorage.getItem('login'))
        return this.client.post(this.url + "/messages", { text: message }, {
            headers: {
                Authorization: `Bearer ${authData.result.token}`,
                'Content-Type': 'application/json'
            }
        });
    }

    


     getFeed(limit = 20) {
        
        return this.client.get(`${this.url}/messages?limit=${limit}`)
    }

    getProfileFeed(username, limit = 20) {
        
        return this.client.get(`${this.url}/messages?username=${username}&limit=${limit}`)
    }
    getuserlist (limit =15){
        return this.client.get(`${this.url}/users?limit=${limit}`)
    }

     
 

    deleteUser(event) {
        let loginData = localStorage.getItem('login')
        return this.client.delete(this.url + "/users{username}", loginData);
    }

}
export default DataService;
