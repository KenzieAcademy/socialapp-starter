import axios from "axios";

class UserDataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  //Reminder that this gets ALL users' data
  getUsers() {
    return this.client.get(this.url + "/users");
  }
  //This gets only a user's data specifically by their Username
  getDirectUser(userName) {
    return this.client.get(this.url + "/users/" + userName);
  }
}
export default new UserDataService();
