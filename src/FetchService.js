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

    //========POST Message===========================
    postMessage(message) {
        let endpoint = "/messages";
        let URL = this.domain + endpoint;
        let token = JSON.parse(localStorage.getItem('login')).result.token;

        console.log(message)

        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token,
                'Accept': 'application/json'
            },

            body: JSON.stringify(message)

        })
            .then(response => response.json())

    }


    //=====GetMessageS======================================
    getMessages() {
        let endpoint = "/messages";
        let messagecount = 80;
        let URL = this.domain + endpoint + "?limit=" + messagecount;
        return fetch(URL).then(response => response.json())
    }

    //=====GetMessage======================================

    getMessage(messageId) {
        let endpoint = "/messages/" + messageId;
        let URL = this.domain + endpoint;

        return fetch(URL)
        .then(response => response.json())

    }


    //=====AddLike===========================================
    addLike(messageId) {
        let endpoint = "/likes";
        let URL = this.domain + endpoint;
        let token = JSON.parse(localStorage.getItem('login')).result.token;

        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json'
            },
            // body: JSON.stringify({"messageId": likeId})
            // body: JSON.stringify(messageId)
            body: JSON.stringify({ "messageId": messageId })
        })
            .then(response => response.json())

    }


    //=====DeleteLike==========================================
    deleteLike(likeId) {
        console.log("Hi from deleteLike")
        let endpoint = "/likes/" + likeId;
        let URL = this.domain + endpoint;
        let token = JSON.parse(localStorage.getItem('login')).result.token;

        return fetch(URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json'
            }

        })
            .then(response => response.json())

    }

}

export default FetchService;