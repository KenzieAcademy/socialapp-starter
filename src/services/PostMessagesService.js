import axios from "axios";

class PostMessageService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
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

export default PostMessageService