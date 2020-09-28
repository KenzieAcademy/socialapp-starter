import axios from "axios"

class GetUsersService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "users";
        this.client = client;
    }
    
    getUsers(){
        return this.client.get(this.url + "?limit=1000");
    }

    getUser(username){
        return this.client.get(this.url + "/" + username);
    }
};

export default GetUsersService;