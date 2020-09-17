//import the axios HTTP client to communicate with the API
import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  makeMessage(messageData) {
    console.log(this.url);
    return this.client.post(this.url + "messages/", messageData);
  }
}
export default DataService;
