import axios from "axios"

class GetUsersService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "users?limit=10000";
        this.client = client;
    }
    
    getUsers(){
        return this.client.get(this.url);
    }
};

export default GetUsersService;