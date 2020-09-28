import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class UpdateUserService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "users/";
        this.client = client;
    }
    
    updateUser(userInfo) {
        const loginData = JSON.parse(localStorage.getItem("login"));

        fetch(this.url + loginData.result.username, {
            method: "PATCH",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            body: JSON.stringify(userInfo)
        })
        .then(handleJsonResponse)
        .then(result => {
            return result
        })
    }

};

export default UpdateUserService;