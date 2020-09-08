import axios from 'axios';

class QuestboardService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url;
        this.client = client;
        const loginData = JSON.parse(localStorage.getItem("login"));
        return this.client.patch(this.url + "/users/" + loginData.result.username, userObject, {
            headers: { Authorization: `Bearer ${loginData.result.token}` }
        });
    }
    Register(userData){
        return this.client.post(this.url + "/users", userData);
    }
    Login(){
        return this.client.post(this.url + "/auth/login");
    }
    Logout(){
        return this.client.get(this.url + "/auth/logout");
    }
    Users(){
        return this.client.get(this.url + "/users");
    }
    NameUser() {
        return this.client.get(this.url +"/users/{username}");
    }
    UpdateUser(){
        return this.client.patch(this.url + "/users/{username}");
    }
    DeleteUser(){
        return this.client.delete(this.url + "/users/{username}");
    }
    GetPicture() {
        return this.client.get(this.url + "/users/{username}/picture");
    }
    SetPicture() {
        return this.client.put(this.url + "/users/{username}/picture");
    }
    GetMessageList(){
        return this.client.get(this.url + "/messages");
    }
    PostMessages(){
        return this.client.post(this.url +"/messages");
    }
    GetMessage(){
        return this.client.get(this.url + "/messages/{messageId}");
    }
    DeleteMessage(){
        return this.client.delete(this.url + "/messages/{messageId}");
    }
    Like(){
        return this.client.post(this.url + "/likes")
    }
    Dislike(){
        return this.client.delete(this.url +"/likes/{likeId}")
    }
}

export default QuestboardService;