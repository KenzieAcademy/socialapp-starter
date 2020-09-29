//import the axios HTTP client to communicate with the API
import { jsonHeaders } from "../../redux/actionCreators/constants";
import axios from 'axios';

class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "users";
        this.client = client;
    }

    registerUser(userData){
        return fetch(this.url, {
            method: 'POST',
            headers: {
                ...jsonHeaders
            },
            body: JSON.stringify(userData)
        })
    }

    getUsers(){
      return this.client.get(this.url + "/users")
    }
}
export default DataService;