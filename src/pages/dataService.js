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
  getMessages(limit = 20) {
    return this.client.get(this.url + "/messages?limit=" + limit);
  }
  deleteuser() {
    const loginData = JSON.parse(localStorage.getItem("login")).result;

    return this.client.delete(this.url + `/users/${loginData.username}`, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
  getUser(username) {
    console.log(username);
    return this.client.get(this.url + "/users/" + username)
  }
}
export default DataService;
