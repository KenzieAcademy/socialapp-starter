import axios from 'axios'

class DataService {
    constructor(url = 'http://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }

    registerUser(userData) {
        return this.client.post(this.url + "/users", userData);
    }

    updateUser(userData) {
        const loginData = JSON.parse(localStorage.getItem('login')).result
        let token = loginData.token
        let username = loginData.username
        let url = this.url + "/users/" + username
        return this.client.patch(url, userData,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
    }
}

export default DataService