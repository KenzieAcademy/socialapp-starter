
class FetchService {
    constructor() {
        this.domain = "https://socialapp-api.herokuapp.com"
    }

    registerUser(userData) {
        let endpoint = "/users"
        let URL = this.domain + endpoint
        return fetch(URL, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
    }

    getUser(userName) {
        let endpoint = "/users/"
        let URL = this.domain + endpoint + userName

        return fetch(URL).then(response => response.json())

    }

    updateUser(userName, updateData) {
        let endpoint = "/users/"
        let URL = this.domain + endpoint + userName
        let token = JSON.parse(localStorage.getItem('login')).result.token

        return fetch(URL, {
        method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            },
        body: JSON.stringify(updateData)
        })
        .then(response => response.json()) 
    }
    userMessage() {
        let endpoint = "/messages"
        let messageCount = 100
        let URL = this.domain + endpoint + "?limit=" + messageCount
        return fetch(URL)
            .then(response => response.json())
    }
    
}


export default FetchService;