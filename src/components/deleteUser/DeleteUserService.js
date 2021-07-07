import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"
import { store } from "../../redux"

class DeleteUserService {
    constructor(url = 'https://socialapp-api.herokuapp.com/users/', client = axios.get()) {
        this.url = url + "deleteUser";
        // this.client = client;
    }

    deleteNow(userName) {
        const loginData = JSON.parse(localStorage.getItem("login"));

        fetch(this.url + loginData.result.username, {
            method: "GET",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            // body: JSON.stringify(userName)
        })
            .then(handleJsonResponse)
            .then(result => {
                return result
            })
    }

    getToken() {
        const { token } = store.getState().auth.login.result
        return token
    }

};

export default DeleteUserService;