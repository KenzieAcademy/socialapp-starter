import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class PostMessageService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "messages";
        this.client = client;
    }

    postMessage(messageBody) {
        const loginData = JSON.parse(localStorage.getItem("login"));
        let fetchBody = {
            text: messageBody
        }

        fetch(this.url, {
            method: "POST",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            body: JSON.stringify(fetchBody)
        })
        .then(handleJsonResponse)
        .then(result => {
            return result
        })
    }
};

export default PostMessageService;