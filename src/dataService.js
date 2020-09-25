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
  GetUserPicture(username) {
    return this.client.get(this.url + "/users/" + username + "/picture");
  }
  postMessage(data) {
    const { token } = JSON.parse(localStorage.getItem("login")).result;
    return fetch(this.url + "/messages", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  // postMessage(data) {
  //   const { token } = store.getState().auth.login.result;
  //   return this.client.post(
  //     this.url + "/messages",
  //     { body: data },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //}
  // below not complete just thoughts from eric
  // postMessage(message){
  // let authData=JSON.parse(localStorage.getItem("login.token"))
  //     return this.client.post(this.url+"/users",registrationData,
  //     headers, {Authorization: Bearer ${authData.result.token}});
  // }
  GetAUser(username) {
    return this.client.get(this.url + "/" + username);
  }
  //   postMessage(message) {
  //     let authData = JSON.parse(localStorage.getItem("login"));
  //     return this.client.post(this.url + "/users", {
  //       headers: { Authorization: `Bearer ${authData.result.token}` },
  //     });
  // below not complete just thoughts from eric
  // postMessage(message){
  // let authData=JSON.parse(localStorage.getItem("login.token"))
  //     return this.client.post(this.url+"/users",registrationData,
  //     headers, {Authorization: Bearer ${authData.result.token}});
  // }
}

export default DataService;
