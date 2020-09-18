import axios from "axios";

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
    // get messages +/messages
  }
  getUsers() {
    return this.client.get(this.url + "/users?limit=10");
  }


  getMessages() {
    return this.client.get(this.url + "/messages?limit=10");
  }
  GetUserPicture(username){
    return this.client.get(this.url+'/users/'+username+'/picture')
}
  // below not complete just thoughts from eric
  // postMessage(message){
  // let authData=JSON.parse(localStorage.getItem("login.token"))
  //     return this.client.post(this.url+"/users",registrationData,
  //     headers, {Authorization: Bearer ${authData.result.token}});
  // }
    GetAUser(username){
        return this.client.get(this.url+'/'+username)
    }
    // below not complete just thoughts from eric
    // postMessage(message){
    // let authData=JSON.parse(localStorage.getItem("login.token"))
    //     return this.client.post(this.url+"/users",registrationData,
    //     headers, {Authorization: Bearer ${authData.result.token}});
    // }
}
export default DataService;
