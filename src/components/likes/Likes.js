import axios from "axios";

class Likes {
    constructor(url="https://socialapp-api.herokuapp.com/",client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getLikesFunction(){
        return this.client.post(this.url = "/likes");
    }
        
    
}
export default Likes