import axios from 'axios';

import { store } from "../../redux"

class QuestboardService {
    constructor(
        url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }

    getUsername() {
        const loginData = JSON.parse(localStorage.getItem("login"))

        if (loginData.result !== null) {
            const { username } = loginData.result
            return username
        }
        return null
    }

    getToken() {
        const { token } = store.getState().auth.login.result

        return token
    }

    Register(userData) {
        return this.client.post(this.url + "/users", userData);
    }
    Login() {
        return this.client.post(this.url + "/auth/login");
    }
    Logout() {
        return this.client.get(this.url + "/auth/logout");
    }
    Users() {
        return this.client
            .get(this.url + "/users?limit=1000")
            .then(response => {
                return response.data.users
            })
    }
    NameUser() {
        return this.client.get(this.url + "/users/" + this.getUsername());
    }
    UpdateUser(user) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }
        return this.client.patch(this.url + "/users/" + this.getUsername(), user, config);
    }
    DeleteUser() {
        return this.client.delete(this.url + "/users/{username}");
    }
    GetPicture() {
        return this.client.get(this.url + "/users/" + this.getUsername() + "/picture");
    }
    SetPicture(imageUrl) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }
        return this.client.put(this.url + "/users/" + this.getUsername() + "/picture", imageUrl, config)
            ;
    }
    GetMessageList() {
        return this.client
            .get(this.url + "/messages?limit=20")
            .then(response => {
                return response.data.messages
            })
    }
    PostMessages() {
        return this.client.post(this.url + "/messages");
    }
    GetMessage() {
        return this.client.get(this.url + "/messages/{messageId}").then(response => { return response.data.messages });
    }
    DeleteMessage() {
        return this.client.delete(this.url + "/messages/{messageId}");
    }
    Like(messageId) {
        const requestBody = { messageId }
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }
        return this.client
            .post(this.url + "/likes", requestBody, config)
            .then(response => response.data.like)
    }
    Dislike() {
        return this.client.delete(this.url + "/likes/{likeId}")
    }

    GoogleCallback() {
        return this.client.get(this.url + "auth/google/callback")
    }

    GoogleLogin() {
        return this.client.get(this.url + "auth/google/login")
    }

    PostMesage(message) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }

        return this.client.post(this.url + "/messages", { "text": message }, config)
    }
}

export default QuestboardService;