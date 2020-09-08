
class Service extends React.Component {
    constructor() {
        this.domain = "https://socialapp-api.herokuapp.com/"
    }


    registerUser(userData) {
        let goalDomain = "/users"
        let domain = this.domain + goalDomain
        fetch(URL, {
            method: "Post",
            header: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(userData)



        })
            .then(response => response.json())
            .then(resData => console.log(resData))
    }
}

export default Service