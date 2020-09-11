import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  registerUser(regisrationData){
    return this.client.post(this.url + "users", regisrationData)
  }
}
export default DataService;
