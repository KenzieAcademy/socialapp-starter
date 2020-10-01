import axios from "axios";

class MessageService {
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

  getMessage(messageId) {
    console.log(messageId)
    return this.client.get(this.url + `/messages/${messageId}`)
  }

}

export default MessageService;
