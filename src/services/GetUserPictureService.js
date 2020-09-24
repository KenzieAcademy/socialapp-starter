import axios from "axios";

class GetUserPictureService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  GetUserPicture(username) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.get(
      this.url + "/users/" + username + "/picture",
      {
        headers: {
          Authorization: `Bearer ${loginData.result.token}`,
        },
      }
    );
  }
}

export default GetUserPictureService;
