import axios from "axios";
import { store } from "../src/redux"

class socialAppService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  registerUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }

  getUser(username) {
    return this.client.get(this.url + "/users/" + username).then(response => response.data.user.displayName)
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }

  getUserName() {
    const { username } = store.getState().auth.login.result;
    return username
  }
  getToken() {
    const loginData = JSON.parse(localStorage.getItem("login"))
    const { username, token } = loginData.result
    // const { token } = store.getState().auth.login.result;
    return token
  }


  getRecentMessages() {
    return this.client.get(`${this.url}/messages?limit=20`).then((response) => {
      return response.data.messages;
    });
  }

  postLike(messageId) {
    const endpoint = `${this.url}/likes`
    const config = {
      headers: {
        Authorization: "Bearer " + this.getToken(),
      },
    }
    return this.client.post(endpoint, { messageId }, config)
      .then(response => response.data.like)
  }

  deleteLike(likeId) {
    const endpoint = `${this.url}/likes/`
    const config = {
      headers: {
        Authorization: "Bearer " + this.getToken(),
      },
    }
    return this.client.delete(endpoint, { likeId }, config)

  }

  postNewMessage(message) {
    console.log(this.getToken())
    return this.client.post(
      this.url + "/messages",
      { text: message },
      {
        headers: {
          Authorization: "Bearer " + this.getToken(),
        },
      }
    );
  }


  updateUser(userData) {
    let loginData = JSON.parse(localStorage.getItem("login"))
    return this.client.patch(this.url + `/users/${loginData.result.username}`, userData,
      { headers: { Authorization: `Bearer ${loginData.result.token}` } })
  }

  putPhoto(picObject) {
    let loginData = JSON.parse(localStorage.getItem("login"))
    return this.client.put(this.url + `/users/${loginData.result.username}/picture`,
      picObject, { headers: { Authorization: `Bearer ${loginData.result.token}` } })
  }

  getUserData() {
    let loginData = JSON.parse(localStorage.getItem("login"))
    return this.client.get(this.url + `/users/${loginData.result.username}`,
      { headers: { Authorization: `Bearer ${loginData.result.token}` } })
  }
  // deleteMessage() {
  //   let loginData = JSON.parse(localStorage.getItem("login"))
  //   return this.client.delete(this.url + `/messages/${loginData.result.messageId}/message`
  //   { headers: { Authorization: `Bearer ${loginData.result.token}` } })
  // }

}

export default socialAppService;
