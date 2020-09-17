import axios from 'axios';

class MessageService {
    constructor(url = 'https://socialapp-api.herokuapp.com/messages?limit=100', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getMessage(){
        return this.client.get(this.url);
    }
}
export default MessageService;