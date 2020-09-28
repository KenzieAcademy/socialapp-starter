import axios from 'axios';




class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
        this.token = JSON.parse(localStorage.getItem('login'))
    }

    //users

    registerUser(userData) {
        return this.client.post(this.url + "/users/", userData)

    }
    updateUser(userData, userName) {
        return this.client.patch(this.url + `${"/users/"}${userName}` ,userData, {
            headers: {
                
                Authorization: "Bearer " + this.token.result.token
            }
        })

    }
    deleteUser(userName) {
        return this.client.delete(this.url + '/users/' + userName, {
            headers: {
                
                Authorization: "Bearer " + this.token.result.token
            }
        })

    }

    //messages

    createMessage(message) {
        return this.client.post(this.url + '/messages', message, {
            headers: {
                
                Authorization: "Bearer " + this.token.result.token
            }
        })

    }
    getMessage() {
        return this.client.get(this.url + '/messages')

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