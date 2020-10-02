import axios from "axios";

class DeleteMessageService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  createDelete(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.delete(this.url + "/messages/" + messageId, {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    });
  }

  getUserName() {
    return JSON.parse(localStorage.getItem("login")).result.username;
  }
}

export default DeleteMessageService;
