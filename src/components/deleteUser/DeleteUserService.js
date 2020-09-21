import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class DeleteUserService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "deleteUser";
        this.client = client;
    }

    deleteNow(userName) {
        const loginData = JSON.parse(localStorage.getItem("login"));

        fetch(this.url, {
            method: "GET",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            body: JSON.stringify(userName)
        })
        .then(handleJsonResponse)
        .then(result => {
            return result
        })
    }
};

export default DeleteUserService;