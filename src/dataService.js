import axios from 'axios';
class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    
    generateConfig() {
        const token = JSON.parse(localStorage.getItem("login")).result.token
        return { headers: {Authorization: `Bearer ${token}`}}
    }

    registerUser(userData){
        return this.client.post(this.url + "/users", userData)
    }
    getUserPicture(username){
        return this.client.get(`${this.url}/users/${username}"/picture"`)
        .catch(error => console.log(error))
    }
    putUserPicture(username, picture){
        let token = JSON.parse(localStorage.getItem("login")).result.token
        return this.client.put(`${this.url}/users/${username}/picture`, picture, { 
            headers: {Authorization: "Bearer "+token}
        })
    }
    getUsers(){
        return this.client.get(this.url + "/users")

    }
    getSingleUser(username) {
        return this.client.get(`${this.url}/users/${username}`)
    }

    patchUser(userName){
        return this.client.patch(this.url+"/users/"+userName)
    }

    deleteUser(user){
        return this.client.delete(`${this.url}/users/${user}`, this.generateConfig())
        .catch(error => console.log(error))
    }

    postMessage(){
        return this.client.post(this.url+"/messages")
    }

    getMessages(){
        return this.client.get(this.url + "/messages/")
    }

    getSpecificMessage(messageID){
        return this.client.get(this.url + "/messages/" + messageID)
    }

    deleteMessage(messageID){
        return this.client.delete(this.url + "/messages/" + messageID)
    }
    postLike(){
        return this.client.post(this.url+"/likes")
    }

    deleteLike(likeID){
        return this.client.delete(this.url + "/likes/" + likeID)
    }
    
}
export default DataService;