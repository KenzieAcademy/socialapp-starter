import axios from "axios";
import { store } from "./redux";

class socialAppService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
  
    this.url = url;
    this.client = client;
  }
getToken(){
    const { username, token } = store.getState().auth.login.result;
    return token
}
getUsername(){
    const { username, token } = store.getState().auth.login.result;
    return username
}
  
  registerUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }
  getRecentMessages() {
    return this.client.get(`${this.url}/messages`).then((response) => {
      return response.data.messages;
    });
  }
  postNewMessage(message) {
      console.log(this.getToken())
    return this.client.post(
      this.url + "/messages",
      { text: message },
      {
        headers: {
          Authorization: "Bearer " + this.getToken(),
        },
      }
    );
  }
}

export default socialAppService;
