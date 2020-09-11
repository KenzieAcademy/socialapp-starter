import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/docs/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  createnewuser() {
    return this.client.post(this.url + "users");
  }
  getLoginForm() {
    return this.client.post(this.url + " login");
  }
}
export default DataService;
