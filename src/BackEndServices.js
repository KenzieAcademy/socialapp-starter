import axios from 'axios';

const BASE_URL = 'https://socialapp-api.herokuapp.com'

class BackEndServices {
    constructor(baseURL = BASE_URL, client){
        this.baseURL = baseURL;
        this.client = client || axios.create({ baseURL }) 
    }

    getMessages(limit= 10){
        return this.client.get(`/messages?limit=${limit}`);
    }

}

export default new BackEndServices();