//import the axios HTTP client to communicate with the API
import axios from "axios";
import {
  handleJsonResponse,
  jsonHeaders,
} from "./redux/actionCreators/constants";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  makeMessage(messageData) {
    console.log(this.url);
    const logIn = JSON.parse(localStorage.getItem("login"));
    fetch(this.url + "/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${logIn.result.token}`,
        ...jsonHeaders,
      },
      body: JSON.stringify(messageData),
    })
      .then(handleJsonResponse)
      .then((result) => {
        console.log(result);
        return result;
      });
  }
  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
  }
}
export default DataService;
