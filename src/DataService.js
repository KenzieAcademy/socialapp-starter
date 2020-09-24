//import the axios HTTP client to communicate with the API
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

  getUserPicture() {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.get(this.url + "/users/" + userName + "/picture", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  postUserPicture(picObj) {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.put(
      this.url + "/users/" + userName + "/picture",
      picObj,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
  postMessage(message) {
    console.log("posting", message);
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "/messages", message, {
      headers: { Authorization: `Bearer ${loginData.result.token} ` },
    });
  }

  updateUser(userData) {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.patch(this.url + "/users/" + userName, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getMessageList(limit = 20) {
    return this.client.get(`${this.url}/messages?limit=${limit}`);
  }

  postLikes(messageId) {
    const data = { messageId };
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "/likes", data, {
      headers: { Authorization: `Bearer ${loginData.result.token} ` },
      // .then(
      //   (response) => {
      //     return response.data.like;
      //   }
      // ),
    });
  }
}

export default DataService;
