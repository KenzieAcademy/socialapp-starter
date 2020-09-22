import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class DeleteMessageService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.delete()){
        this.url = url + "deleteMessage";
        this.client = client;
    }

    DeleteMessage(DeleteMessageBody) {
        const loginData = JSON.parse(localStorage.getItem("login"));

        fetch(this.url, {
            method: "POST",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            body: JSON.stringify(DeleteMessageBody)
        })
        .then(handleJsonResponse)
        .then(result => {
            return this.body = null
        })
    }
};

export default DeleteMessageService;