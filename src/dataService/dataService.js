//import the axios HTTP client to communicate with the API
import axios from 'axios';
class dataService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()) {
        this.url = url;
        this.client = client;
    }
    registerUser(userData) {
        return this.client.post(this.url + "users", userData)
    }
    deleteUser(username) {
        return this.client.delete(this.url + "users", deleteUser)
    }
    getData() {
        return this.client.get(this.url);
    }
}
export default dataService;