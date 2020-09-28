import axios from 'axios';
import { store } from "../redux";



class DataService {

    constructor
        (url = "https://socialapp-api.herokuapp.com", 
        client = axios.create()
    ){
        this.url = url;
        this.client = client;
    }
    registerUser(userData){
        return this.client
        .post(this.url + "/users", userData);
    }
    getUsers(){
        return this.client
        .get(this.url + "/users?limit=20")
        .then(response => {
            return response.data.users
        })
    }
    getUsername() {
        const loginData = JSON.parse(localStorage.getItem("login"))
        const {username} = loginData.result

        return username
    }
    getToken (){
        const {token} = store.getState().auth.login.result

        return token
    }
    getRecentMessages() {
        return this.client
        .get(this.url + "/messages?limit=20")
        .then(response => {
             return response.data.messages
            })
        }
    postLike(messageId){
            const requestBody = {messageId}
             const config ={ 
                 headers: {
                    Authorization: `Bearer ${this.getToken()}`
                    }
                }
            return this.client
            .post(this.url +"/likes", requestBody,config )
            .then(response => response.data.like)
        }
}
export default DataService;