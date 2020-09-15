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
  createMessage(text) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "/messages", text, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  getUser(username) {
    return this.client.get(this.url + "/users/" + username);
  }
}
export default DataService;
