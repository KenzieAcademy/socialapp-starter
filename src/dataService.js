import axios from "axios";
import { register } from "./serviceWorker";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  registerUser(registerData) {
    return this.client.post(this.url + "/user", registerData);
  }

  getMessages() {
    return this.client.get(this.url + "/messages");
  }
}
export default DataService;
