import { message } from "antd";
import axios from "axios";
import { register } from "./serviceWorker";

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
  }

  getUser(username) {
    return this.client.get(this.url + "/users/" + username);
  }

  getUsers(number) {
    return this.client.get(this.url + "/users?limit=" + number);
  }

  postMessages() {
    return this.client.post(this.url + "messages");
  }

  getMessages(limit = 20) {
    return this.client.get(this.url + "/messages?limit=" + limit);
  }

  updateUser(username) {
    return this.client.patch(this.url + "/users/" + username);
  }

  // get
  //pass a method into the end

  //   getMessages() {
  //     return this.client.get(this.url + "/messages");
  //   }

  //  look up axios api token
  //  postMessage(){
  //       let authData = JSON.parse(localStorage.getItem("login"))
  //       return this.client.post(this.url +"/users",){
  //           Headers: {Authori}
  //       }
  //   }
}
export default DataService;
