import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  RegisterUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }
  getMessages(limit) {
    return this.client.get(this.url + "/messages?limit=" + limit);
  }

  getSpecificMessage(messageId) {
    return this.client.get(this.url + "/messages/" + messageId);
  }

  createMessage(text) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "/messages", text, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
  updateUser(text) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.patch(
      this.url + "/users/" + loginData.result.username,
      text,
      {
        headers: { Authorization: `Bearer ${loginData.result.token}` },
      }
    );
  }
  likeMessage(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "/likes/", messageId, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  unlikeMessage(likeId) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.delete(this.url + "/likes/" + likeId, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
  deleteMessage(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.delete(this.url + "/messages/" + messageId, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
  deleteUser(username) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.delete(this.url + "/users/" + username, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  getUser(username) {
    return this.client.get(this.url + "/users/" + username);
  }
  getUserPicture(username) {
    return this.client.get(`${this.url}/users/${username}/picture`);
  }
  changeProfilePic(picture) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    console.log(picture);
    return this.client.put(
      `${this.url}/users/${loginData.result.username}/picture`,
      picture,
      {
        headers: {
          Authorization: `Bearer ${loginData.result.token}`,
        },
      }
    );
  }
}
export default DataService;
