import axios from "axios";

class GetLoggedInUserPictureService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  GetLoggedInUserPicture() {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.get(
      this.url + "/users/" + loginData.result.username + "/picture",
      {
        headers: {
          Authorization: `Bearer ${loginData.result.token}`,
        },
      }
    );
  }
}

export default GetLoggedInUserPictureService;
