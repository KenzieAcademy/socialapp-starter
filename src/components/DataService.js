import axios from 'axios';




class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    registerUser(userData){
        return this.client.post(this.url + "/users", userData)
         
    };
    profileData(username){
        return this.client.get(this.url + `/users/${username}`)
      }
   
}
export default DataService;