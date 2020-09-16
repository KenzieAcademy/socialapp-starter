import axios from 'axios';


class DataService {

    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;

    }
    registerUser(userData) {
        
        return this.client.post(this.url + "/users", userData);

    }

    getUsers() {
        return this.client.get(this.url + "/users");
    }

    handleMessage(message) {
        let ls = JSON.parse(localStorage.login)
        return this.client.post(this.url + "/messages", message,
            {headers: {Authorization: `Bearer ${ls.result.token}`}})
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
}

export default DataService;