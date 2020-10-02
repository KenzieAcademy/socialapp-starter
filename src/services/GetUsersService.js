import axios from "axios";
class GetUsersService {
    constructor(
        url = "https://socialapp-api.herokuapp.com",
        client = axios.create()
    ) {
        this.url = url;
        this.client = client;
    }
    getUsers() {
        return this.client.get(this.url + "/users");
    }
}
export default GetUsersService;