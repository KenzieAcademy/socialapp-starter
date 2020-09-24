import axios from "axios";

class UpdateUserInfoService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  updateInfo(updateInfo) {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.patch(
      `${this.url}/users/${loginData.result.username}`,
      updateInfo,
      {
        headers: {
          Authorization: `Bearer ${loginData.result.token}`,
        },
      }
    );
  }
}

export default UpdateUserInfoService;
