import axios from "axios";

class MessageService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  //Gets all Message Data
  obtainMessages() {
    return this.client.get(`${this.url}/messages`);
  }

  obtainUserMessages(username) {
    return this.client.get(`${this.url}/messages?username=${username}`);
  }
}
export default new MessageService();
