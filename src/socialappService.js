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

  getMessages(limit = 20) {
    return this.client.get(this.url + "messages", limit);
  }

  postMessage(message) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "messages", message, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
}
export default SocialappService;
