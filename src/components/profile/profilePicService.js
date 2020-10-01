import axios from 'axios'

class ProfilePicService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    this.url = url;
    this.client = client
}
    picUpload(picData){
        return this.client.put(this.url + "/users/{username}/picture", picData)
    }   
}

export default ProfilePicService