import axios from "axios";

class socialAppService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  registerUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }
  // updateUser(userData) {
  //   return this.client.patch(this.url + "users", userData);
  // }
  // postMessage() {
  //   return this.client.post(this.url + "/messages");
  // }

  // getRecentMessages() {
  //   return this.client.get("/messages").then(response =>{
  //     return response.data.messages
  //   })
  // }

  // deleteMessage() {
  //   let loginData = JSON.parse(localStorage.getItem("login"))
  //   return this.client.delete(this.url + `/messages/${loginData.result.messageId}/message`
  //   { headers: { Authorization: `Bearer ${loginData.result.token}` } })
  // }

  putPhoto(picObject) {
    let loginData = JSON.parse(localStorage.getItem("login"))
    return this.client.put(this.url + `/users/${loginData.result.username}/picture`,
      picObject, { headers: { Authorization: `Bearer ${loginData.result.token}` } })
  }


}

export default socialAppService;
