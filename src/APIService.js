import axios from 'axios'


class CreateUser {
    constructor(url = "https://socialapp-api.herokuapp.com", client = axios.create()) {
        this.url = url
        this.client = client
    }


    registerUser(data) {
        return this.client.post(this.url + "/users", data)
            .then(response => { console.log(response.data) })
    }
}

export default CreateUser