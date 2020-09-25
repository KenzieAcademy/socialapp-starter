import axios from "axios";

class PostMessageService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  getToken() {
    const loginData = JSON.parse(localStorage.getItem("login"));
    const { token } = loginData.result;
    return token;
  }

  postMessage(text) {
    const config = {
        headers: {Authorization: `Bearer ${this.getToken()}`, 
        "Content-Type": "application/json"
    }}

    return this.client.post(
      this.url + "/messages",
      text,
      config
    );
  }
}

export default PostMessageService;
