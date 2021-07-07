import axios from "axios"

class GetMessagesService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "messages?limit=100";
        this.client = client;
    }
    
    getMessages(){
        return this.client.get(this.url);
    }
};

export default GetMessagesService;