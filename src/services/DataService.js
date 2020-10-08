import axios from "axios";

class DataService {
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
  deleteUser() {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.delete(this.url + "/users/" + userName, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  postMessage(message) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "/messages", message, {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    });
  }
  getAllMessages(limit = 1000) {
    return this.client.get(this.url + `/messages?limit=${limit}`);
  }
  getUserMessages(username, limit = 20) {
    return this.client.get(`/messages?username=${username}limit=${limit}`);
  }

  getToken() {
    const { token } = JSON.parse(localStorage.getItem("login")).result;
    return token;
  }

  getUser(user) {
    return this.client.get(this.url + "/users/" + user);
  }

  getUsername() {
    const { username } = JSON.parse(localStorage.getItem("login")).result;
    return username;
  }

  uploadPicture(formData) {
    const url = this.url + `/users/${this.getUsername()}/picture`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.put(url, formData, config);
  }
}
export default DataService;
