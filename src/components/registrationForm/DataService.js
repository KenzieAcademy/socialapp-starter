//import the axios HTTP client to communicate with the API
import axios from 'axios';

class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "users";
        this.client = client;
    }

    registerUser(userData){
        return this.client.post(this.url, userData);
    }

    getUsers(){
      return this.client.get(this.url + "/users")
    }
}
export default DataService;