
class Service  {
    constructor() {
        this.domain = "https://socialapp-api.herokuapp.com"
    }


    registerUser(userData) {
        let endpoint = "/users"
        let URL = this.domain + endpoint
        fetch(URL, {
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

    userMessage() {
        let endpoint = "/messages"
        let URL = this.domain + endpoint
        fetch(URL)
            .then(response => response.json())
            .then(resData => console.log(resData))
    }

}

export default Service