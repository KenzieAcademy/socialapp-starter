import axios from 'axios'

class ProfileService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    this.url = url;
    this.client = client
}
    picUpload(picData){
        return this.client.put(this.url + "/users/{username}/picture", picData)
    }   
}

export default ProfileService