import axios from "axios";

class PostLikeService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  postLike = (messageId) => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(`${this.url}/likes/`, messageId, {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    });
  };
}
export default new PostLikeService();
