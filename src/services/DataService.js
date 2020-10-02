//import the axios HTTP client to communicate with the API
import axios from "axios";
import { store } from "../redux";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  getUsername() {
    const { username } = store.getState().auth.login.result;
    return username;
  }

  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
  }

  postMessage(message) {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.post(this.url + "/messages", message, {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    });
  }
}
export default DataService;
