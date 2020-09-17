import axios from "axios";
class SocialappService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  getQuestion() {
    return this.client.get(this.url);
  }
}
export default SocialappService;
