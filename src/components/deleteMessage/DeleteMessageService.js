import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class DeleteMessageService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.get()){
        this.url = url + "deleteMessage";
        this.client = client;
    }

    DeleteMessage(DeleteMessageBody) {
        const messageId = JSON.parse(localStorage.getItem("messageId"));

        fetch(this.url, {
            method: "GET",
            headers: { Authorization: `Bearer ${messageId.result.token}`, ...jsonHeaders },
            body: JSON.stringify(messageId)
        })
        .then(handleJsonResponse)
        .then(result => {
            return this.body = null
        })
    }
};

export default DeleteMessageService;