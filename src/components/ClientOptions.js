import axios from 'axios';
import { jsonHeaders, handleJsonResponse } from "../redux/actionCreators/constants";
class ClientOptions {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.client = client
        this.url = url
    }
    // GetAllUsers() {
    //     return this.client.get(this.url + "/users")
    // }
    INameUser() {
        return this.client.get(this.url + "/users/{username}")
    }
    IDeleteUser(){
        return this.client.delete(this.url + "/users/{username}")
    }
    UpdateClient(messageBody) {
        const loginData = JSON.parse(localStorage.getItem("login"));
        const {username, email} = loginData.result
        fetch(this.url, {
            method: "PATCH",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            body: JSON.stringify(messageBody)
        })
        .then(handleJsonResponse)
        .then(result => {
            return result
        })
    }
    // return this.client.patch(this.url + users + logoutData.results)
    // return this.client.patch(this.uurl + "/user/{username} + grabPicture.results)
    GrabMessageList() {
        return this.client.get(this.url + "/messages?????")
    }
    PostMessages(){
        return this.client.post(this.url + "messages////")
    }
    GetMessage(){
        return this.client.get(this.url + "/messages//////")
    }
    //class LoginForm Extends React.Component {
    //     state = {username: "", password: ""}
    //     handleLogin = event => {
    //         event.preentDefaul()
    //         eventObject: event
    //         this.PaymentResponse.login(this.state)
    //     }
    // }



    GrabPicture() {
        return this.client.get(this.url + "/users{username}/picture")
    }
    PutPictureUp(){
        return this.client.put(this.url + "/users/{username}/picture")
    }
    LoginUser() {
        return this.client.post(this.url + "/auth/login")
    }
    LogoutUser() {
        return this.client.get(this.url + "/auth/logout")
    }
}
export default ClientOptions