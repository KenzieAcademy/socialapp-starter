import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
<<<<<<< HEAD

  registerUser(regisrationData){
    return this.client.post(this.url + "/users", regisrationData)
=======
  registerUser(registrationData) {
    return this.client.post(this.url + "users", registrationData);
>>>>>>> origin/sulaimon
  }
}
export default DataService;
