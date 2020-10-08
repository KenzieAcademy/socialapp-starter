import axios from "axios";
class SocialappService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  registerUser(userData) {
    return this.client.post(this.url + "users", userData);
  }
  getUsers() {
    return this.client.get(this.url + "users");
  }

  getUser(user) {
    return this.client.get(this.url + "users/" + user);
  }

  getMessages() {
    return this.client.get(this.url + "messages");
  }

  getMessage(messageID) {
    return this.client.get(this.url + "messages/" + messageID);
  }

  getProfilePic(user) {
    return this.client.get(this.url + "users/" + user + "/picture");
  }

  setProfilePic(user, picture) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.put(this.url + "users/" + user + "/picture", picture, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  updateUser(user, updateData) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.patch(this.url + "users/" + user, updateData, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  addLike(messageID) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "likes", messageID, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  postMessage(message) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "messages", message, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
}
export default SocialappService;
