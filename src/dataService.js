import axios from 'axios';


class DataService {

    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;

    }
    registerUser(userData) {
        
        return this.client.post(this.url + "/users", userData);

    }

    getUsers(userName) {
        return this.client.get(this.url + "/users", userName);
    }

    getUsersPicture() {
        return this.client.get(this.url + "/users/{props.username}/picture");
    }

    setUsersPicture(uploadPicture) {
        return this.client.get(this.url + "/users/{props.username}/picture", uploadPicture);
    }
}

export default DataService;