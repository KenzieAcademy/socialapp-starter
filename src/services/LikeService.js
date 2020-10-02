import axios from "axios";

class LikeService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  createLike(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.post(
      this.url + "/likes",
      { messageId },
      {
        headers: {
          Authorization: `Bearer ${loginData.result.token}`,
        },
      }
    );
  }
}

export default LikeService;
