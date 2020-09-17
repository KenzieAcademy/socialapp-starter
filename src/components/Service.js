class Service  {
    constructor() {
        this.domain = "https://socialapp-api.herokuapp.com"
    }


    registerUser(userData) {
        let endpoint = "/users"
        let URL = this.domain + endpoint
        fetch(URL, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)



        })
            .then(response => response.json())
            .then(resData => console.log(resData))
    }
}

export default Service