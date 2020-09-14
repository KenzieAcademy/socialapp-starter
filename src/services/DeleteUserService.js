import axios from "axios";

class DeleteUserService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  deleteUser() {
    let loginData = JSON.parse(localStorage.getItem("login"));
    let username = loginData.result.username;

    return this.client.delete(this.url + "/users/" + username, {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    });
  }
}

export default DeleteUserService;
