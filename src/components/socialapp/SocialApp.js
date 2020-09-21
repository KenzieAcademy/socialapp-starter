import axios from 'axios'
class SocialApp{
    constructor(url = 'https://socialapp-api.herokuapp.com/',client = axios.create()){
        this.client = client;
    } 
    edituser(){
        return this.client.patch(this.url + 'users/{username}')
    }
}
export default SocialApp