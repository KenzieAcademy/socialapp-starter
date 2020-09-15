import axios from 'axios';

class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }

    registerUser(registrationData){
    registerUser(registrationData) {
        return this.client.post(this.url + "/users", registrationData);
    }

    listUsers() {
        return this.client.get(this.url)


    }

}
export default DataService; 