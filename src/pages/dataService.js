import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  getLoginForm() {
    return this.client.post(this.url + "login");
  }
  getMessageList() {
    return this.client.get(this.url + "messages");
  }
}
export default DataService;
