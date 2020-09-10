import axios from 'axios';
class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    registerUser(registrationData){
        return this.client.post(this.url + "/users", registrationData);
    }

    /*postMessage(message) {
        let authData = localStorage.getItem('login')
    }*/

}
export default DataService;
