//import the axios HTTP client to communicate with the API
import axios from 'axios';

class DataService {

    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    this.url = url;
    this.client = client;
    }     
    
    registerUser(registrationData){
        return this.client.post(this.url +"/users", registrationData);
    }
    editProfile(createBioData){
      return this.client.patch(this.url +"/users",createBioData);
 }
    getMessages(limit = 20){
        return this.client.get(`/messages?limit=${limit}`)
    }
}


export default DataService;
