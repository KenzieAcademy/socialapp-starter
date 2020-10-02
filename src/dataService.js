import axios from "axios";
import { store } from "../src/redux";

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

  getToken() {
    const { token } = store.getState().auth.login.result;
    return token;
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

  getPicture(username) {
    return this.client.get(this.url + "/users/" + username + "/picture");
  }

  patchuser(password, about, displayName, username) {
    const requestBody = { password, about, displayName };
    let token = this.getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(requestBody);
    console.log(token);
    console.log(config);
    return this.client
      .patch(this.url + "/users/" + username, requestBody, config)
      .then((response) => response.data);
  }

  postMessages(text) {
    const requestBody = { text };
    let token = this.getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(requestBody);
    console.log(token);
    console.log(config);
    return this.client
      .post(this.url + "/messages", requestBody, config)
      .then((response) => response.data.message);
  }

  getMessages(limit = 20) {
    return this.client.get(this.url + "/messages?limit=" + limit);
  }

  // updateUser(username) {
  //   return this.client.patch(this.url + "/users/" + username);
  // }

  postLike(messageId) {
    const requestBody = { messageId };
    let token = this.getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    return this.client
      .post(this.url + "/likes", requestBody, config)
      .then((response) => response.data.like);
  }

  // postLike(messageId) {
  //   const requestBody = { messageId };
  //   let token = this.getToken();
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   console.log(config);
  //   return this.client
  //     .post(this.url + "/likes", requestBody, config)
  //     .then((response) => response.data.like);
  // }
  putUsers(username) {
    const requestBody = { username };
    let token = this.getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return this.client
      .put(this.url + "/users/" + username + "/picture", requestBody, config)
      .then((response) => response.data);
  }

  deleteUser(username) {
    const requestBody = { username };
    let token = this.getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return this.client
      .delete(this.url + "/users/" + username, requestBody, config)
      .then(console.log("deleted"));
  }

  uploadPicture(formData) {
    let token = this.getToken();
    const url = this.url + `/users/${this.getUsername()}/picture`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return this.client.put(url, formData, config);
  }
  /*Dmg picture


  */
}
export default DataService;
