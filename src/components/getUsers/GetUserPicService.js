import axios from "axios"

class GetUserPicService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "users/";
        this.client = client;
    }
    
    getUserPic(userName){
        console.log(this.url + userName + "/picture")
        fetch(this.url + userName + "/picture", {
            method: "GET",
            accept: "image/png",
        })
        .then(result => {
            return result
        })
        
    }
};

export default GetUserPicService;