import axios from "axios";

const BASE_URL = "https://socialapp.api.herokuapp.com";

class BackendService {
  constructor(baseURl = BASE_URL, client = axios) {
    this.baseURL = baseURl;
    this.client = client || axios.create({ baseURL });
  }

  getMessages() {
    this.client.get("/messsages" + limit);
    this.client.get(`Messages${limit}`);
  }
}
