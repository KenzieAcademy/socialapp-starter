import axios from 'axios';
class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;
    }
    registerUser(registrationData) {
        return this.client.post(this.url + "/users", registrationData);
    }

    postMessage(message) {
        let authData = JSON.parse(localStorage.getItem('login'))
        return this.client.post(this.url + "/messages", { text: message }, {
            headers: {
                Authorization: `Bearer ${authData.result.token}`,
                'Content-Type': 'application/json'
            }
        });
    }
    //     getFeed() {
    //         let feedData = '?limit=100&username=ggg'
    //         return this.client.get(this.url + "/messages", feedData);
    // }


    getFeed(limit , offset) {
        /* let authData = localStorage.getItem('login')*/
         let messageFeed = this.url + "/messages"
         let authData = JSON.parse(localStorage.getItem('login'))

         return this.client.get( messageFeed+ `?limit=${limit}&offset=${offset}`,{
         headers: {
            Authorization: `Bearer ${authData.result.token}`,
            'Content-Type': 'application/json'
        }
    })
     }

     
 

    deleteUser(event) {
        let loginData = localStorage.getItem('login')
        return this.client.delete(this.url + "/users{username}", loginData);
    }

}
export default DataService;
