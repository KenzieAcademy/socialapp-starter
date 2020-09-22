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
    getMessageFeed(messages){
        return this.client.get(this.url + "messages", messages)
    }
    postMessage(messages){
        return this.client.post(this.url + "messages", messages)
    }
    deletMessage(messages){
        return this.client.delete(this.url + "messages/{messageID}", messages)
    }
    getPicther(){

    }
    putPitcher(){

    }


   
}
export default DataService;