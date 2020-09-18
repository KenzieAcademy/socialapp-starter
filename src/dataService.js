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

  registerUser(registrationData) {
    return this.client.post(this.url + "/users/", registrationData);
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }

  getMessage() {
    return this.client.get(this.url + "/messages?limit=100");
  }
}
export default DataService;
