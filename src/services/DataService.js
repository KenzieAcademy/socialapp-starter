import axios from 'axios';


class DataService {

    constructor(url = "https://socialapp-api.herokuapp.com", client = axios.create()){
        this.url = url;
        this.client = client;
    }
    registerUser(userData){
        return this.client.post(this.url + "/users", userData);
    }
    getUsers(){
        return this.client.get(this.url + "/users");
    }
    googleLogin(){
        return this.client.get (this.url + "/auth/google/login");
    }
    getUserName (){
        const loginData = JSON.parse(localStorage.getItem("login"))
        const {username} = loginData.result.username
    }
    getRecentMessages() {
            return this.client
            .get(this.url + "/messages?limit=20")
            .then(response => {
                return response.data.messages
            })
        }
    /*postLike(messageId){
            const requestBody = {messageId}
             const config ={ 
                 headers: {
                    Authorization: `Bearer ${getToken()}`
                    }
                }
            return this.client
            .post(this.baseURL +"/likes", requestBody,config )
            .then(response => response.data.like)
        }*/
}
export default DataService;