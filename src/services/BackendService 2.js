import axios from "axios"

const BASE_URL = "http://socialapp-api.herokupapp.com"

class BackendService {
    constructor (baseURL = BASE_URL, client) {
        this.baseURL = baseURL
        this.client = client || axios.create({ baseURL })
    }
    geMessages(limit = 20) {
       
        return this.client.get(`/messages?limit=${limit}`)
    }
} 

export default new BackendService()