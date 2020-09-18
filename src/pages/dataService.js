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
  deleteuser() {
    const loginData = JSON.parse(localStorage.getItem("login")).result;

    return this.client.delete(this.url + `/users/${loginData.username}`, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }

  getMessage() {
    return this.client.get(this.url + "/messages");
  }

  deleteMessage(messageId) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.delete(this.url + "/messages/" + messageId, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
  getUser(username) {
    console.log(username);
    return this.client.get(this.url + "/users/" + username)
  }
  getMessages() {
    return this.client.get(this.url + "/messages");
  }
  setuserphoto(formdata) {
    return this.client.put(this.url + "/users", formdata);
  }


}
export default DataService;
