import axios from 'axios';




class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    registerUser(userData){
        return this.client.post(this.url + "/users", userData)
         
    }
    updateUser( userData, userName){
        return this.client.patch(this.url + `${"/users"}${"/"}${userName}`, userData  )
         
    }



   
}
export default DataService;