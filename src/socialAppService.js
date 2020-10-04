import axios from "axios";
import { store } from "./redux";

class socialAppService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {

    this.url = url;
    this.client = client;
  }
  getToken() {
    const { token } = store.getState().auth.login.result;
    return token
  }
  getUsername() {
    const { username } = store.getState().auth.login.result;
    return username
  }

  registerUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }

  getUsers() {
    return this.client.get(this.url + "/users");
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
    return this.client.delete(endpoint, {likeId},config)

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
  nop
}

export default socialAppService;
