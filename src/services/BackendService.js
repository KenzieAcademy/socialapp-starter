import axios from "axios"
const BASE_URL = "https://socialapp-api.herokuapp.com"

class BackendService {
    constructor(baseURL = BASE_URL, client) {
        this.baseURL = baseURL
        this.client = client || axios.create({ baseURL })
    }

    getAllMessages(limit = 1000) {
        return this.client.get(`/messages?limit=${limit}`)
    }
    getUserMessages(username, limit = 20) {
        return this.client.get(`/messages?username=${username}limit=${limit}`)
    }
}


export default new BackendService()