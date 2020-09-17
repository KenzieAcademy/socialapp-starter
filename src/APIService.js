import axios from 'axios'


class CreateUser {
    constructor(url = "https://socialapp-api.herokuapp.com", client = axios.create()) {
        this.url = url
        this.client = client
    }

    // Register A New User
    registerUser(data) {
        return this.client.post(this.url + "/users", data)
    }

    // IN PROGRESS:
    // getUsers () {
    //     return this.client(this.url + "/users" )
    //     .then(response => {
    //         console.log(response.data)
    //     })
    // }
    // deleteUser () {
    //     return this.client.delete(this.url + "/users/{username}")
    //     .then(response => {console.log(response)})
    // }
}

export default CreateUser