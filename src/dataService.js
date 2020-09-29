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

  getUser(username) {
    return this.client.get(this.url + `/users/${username}`)
  }

  getUsername() {
    return store.getState().auth.login.result.username
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

  uploadPicture (pictureAsFormData) {
    const loginData = store.getState().auth.login.result
    const token = loginData.token
    const endpoint = this.url + `/users/${this.getUsername()}/picture`
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return this.client.put(endpoint, pictureAsFormData, config)
  }

  getMessages = () => {
    return this.client.get(this.url + "/messages?limit=20");
  }

  deleteUser = () => {
    const loginData = store.getState().auth.login.result
    const token = loginData.token
    const username = loginData.username
    const url = this.url + "/users/" + username
    return this.client.delete(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

}

export default DataService;
