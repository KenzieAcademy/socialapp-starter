//import the axios HTTP client to communicate with the API
import axios from "axios";
class DataService {
    
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  
  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
  }
}
// getMessages
//
//

postMessage(message){
    let loginData = JSON.parse(localStorage.getItem("login"))
    return this.client.post(this.url + "/messages", message, { headers: {Authorization: `Bearer ${loginData.result.token}`}})
}
export default DataService;
