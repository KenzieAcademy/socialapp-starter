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

  getAllMessages(limit = 20) {
    return this.client.get(`${this.url}/messages?limit=${limit}`);
  }

  getUserMessages(username, limit = 20) {
    return this.client.get(
      `${this.url}/messages?username=${username}limit=${limit}`
    );
  }
}

export default new DataService();
