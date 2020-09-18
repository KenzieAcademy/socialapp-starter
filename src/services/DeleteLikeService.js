import axios from "axios";

class DeleteLikeService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  deleteLike = (likeId) => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.delete(`${this.url}/likes/${likeId}`, {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    });
  };
}
export default new DeleteLikeService();
