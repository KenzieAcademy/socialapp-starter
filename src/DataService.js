import axios from 'axios'
import { message } from 'antd';
class DataService {
    constructor(url = 'http://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }
    submitMessage(message) {
        return this.client.post(this.url + "/messages", message);
    }
    getMessage() {
        return this.client.get(this.url + "/messages")
    }
    getOneMessage() {
        return this.client.get(this.url.com + "/messaages/{messageID}")
    }
    deleteMessage() {
        return this.client.delete(this.url.com + "/messages/{messageID}")
    }
}

export default DataService