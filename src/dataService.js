import axios from "axios";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
    // get messages +/messages
  }
  getMessages() {
    return this.client.get(this.url + "/messages?limit=10");
  }

  postMessage(message) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.get(this.url + "/messages", message, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  getMessage() {
    return this.client.get(this.url + "/messages/{messageId}");
  }
  updateUser() {
    return this.client.patch(this.url + "/users/{username}");
  }
  usersList() {
    return this.client.get(this.url + "/users?limit=10");
  }
  getUser() {
    return this.client.get(this.url + "/users/{username}");
  }
  setPicture() {
    return this.client.put(this.url + "/users/{username}/picture");
  }
  getPicture() {
    return this.client.get(this.url + "/users/{username}/picture");
  }
  // below not complete just thoughts from eric
  // postMessage(message){
  //     let authData=JSON.parse(localStorage.getItem("login.token"))
  //     return this.client.post(this.url+"/users",registrationData,
  //  headers: {Authorization: Bearer ${authData.result.token}});
  // }
}
export default DataService;
