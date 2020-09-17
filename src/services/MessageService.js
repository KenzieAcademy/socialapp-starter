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
  obtainMessages(limit = 20) {
    return this.client.get(`${this.url}/messages?limit=${limit}`);
  }
}
export default new MessageService();
