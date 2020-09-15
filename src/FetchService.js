class FetchService {
    constructor() {
        this.domain = "https://socialapp-api.herokuapp.com"
    }
    //========POST USER===(registration)=========================
    registerUser(userData) {
        let endpoint = "/users";
        let URL = this.domain + endpoint;

        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(userData)

        })
            .then(response => response.json())


    }
    //=====GET USER===(profile)============================
    getUser(username) {
        let endpoint = "/users/" + username;
        let URL = this.domain + endpoint;

        return fetch(URL)
            .then(response => response.json())

    }

    //=====UPDATE USER===(update profile)==================
    updateUser(username, updatedData) {
        let endpoint = "/users/" + username;
        let URL = this.domain + endpoint;
        let token = JSON.parse(localStorage.getItem('login')).result.token;

        console.log("update profile with token: " + token);

        return fetch(URL, {
            method: 'PATCH',
            headers: {
               
                "accept": "application/json",
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updatedData)

        })
            .then(response => response.json())

    }


}

export default FetchService;