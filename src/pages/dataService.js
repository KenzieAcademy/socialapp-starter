import axios from "axios";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  createnewuser(userdata) {
    console.log(userdata);
    return this.client.post(this.url + "/users", userdata);
  }
  getLoginForm() {
    return this.client.post(this.url + "/login");
  }
  getLogout() {
    return this.client.post(`${this.url}/logout`);
  }
  postlike(userdata) {
    return this.client.post(this.url + "/likes", userdata);
  }
  getMessages(limit = 20) {
    return this.client.get(this.url + "/messages?limit=" + limit);
  }
  deleteuser() {
    const loginData = JSON.parse(localStorage.getItem("login")).result;

    return this.client.delete(this.url + `/users/${loginData.username}`, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }

  getlistMessages() {
    return this.client.get(this.url + "/messages");
  }
  createMessage() {
    return this.client.post(this.url + "/messages");
  }

  deleteMessage(messageId) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.delete(this.url + "/messages/" + messageId, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
  getMessage(messageId) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.get(this.url + "/messages/" + messageId, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
  deletelikes(likeId) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.delete(this.url + "/likes/" + likeId, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
  getPicture(username) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.get(this.url + "/users/" + username + "/picture", {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
  setPicture(username) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.put(this.url + "/users/" + username + "/picture", {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
  userUpdate(userId) {
    return this.client.patch(this.url + "/users/" + userId);
  }
}

export default DataService;
