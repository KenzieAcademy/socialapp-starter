import axios from 'axios';
import { store } from "./redux";

class DataService {

  constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
    this.url = url;
    this.client = client;
  }

  registerUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }

  updateUser = (userData) => {
    const loginData = store.getState().auth.login.result
    const token = loginData.token
    const username = loginData.username
    const url = this.url + "/users/" + username
    return this.client.patch(url, userData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((error) => {
        console.log(error)
      })
  }

  getMessages = () => {
    return this.client.get(this.url + "/messages?limit=20");
  }

}

export default DataService;
