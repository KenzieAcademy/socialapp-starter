
class Service  {
    constructor() {
        this.domain = "https://socialapp-api.herokuapp.com"
    }


    registerUser(userData) {
        let endpoint = "/users"
        let URL = this.domain + endpoint
        return fetch(URL, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)



        })
            .then(response => response.json())
            .then(resData => console.log(resData))
    }
    // https://socialapp-api.herokuapp.com/messages?limit=100

    userMessage() {
        let endpoint = "/messages"
        let messageCount = 100
        let URL = this.domain + endpoint + "?limit=" + messageCount
        return fetch(URL)
            .then(response => response.json())
    }

}

export default Service