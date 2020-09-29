import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class LikeMessageService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "likes";
        this.client = client;
    }

    likeMessage(id) {
        const loginData = JSON.parse(localStorage.getItem("login"));
        let fetchBody = "{\"messageId\":" + id + "}"
        fetch(this.url, {
            method: "POST",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            body: fetchBody
        })
        .then(handleJsonResponse)
        .then(result => {
            return result
        })
    }
};

export default LikeMessageService;