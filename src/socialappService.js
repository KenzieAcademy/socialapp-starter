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

  getProfilePic(user) {
    return this.client.get(this.url + "users/" + user + "/picture");
  }

  setProfilePic(user, picture) {
    return this.client.put(this.url + "users/" + user + "/picture", picture);
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
