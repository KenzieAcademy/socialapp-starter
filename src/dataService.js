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
