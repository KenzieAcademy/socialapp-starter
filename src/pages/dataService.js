import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  createnewuser(userdata) {
    console.log(userdata);
    return this.client.post(this.url + "/users", userdata);
  }

  getLoginForm() {
    return this.client.post(this.url + "/login");
  }
  getMessages(limit = 20) {
    return this.client.get(this.url + "/messages?limit=" + limit);
  }
  deleteuser() {
    const loginData = JSON.parse(localStorage.getItem("login")).result;

    return this.client.delete(this.url + `/users/${loginData.username}`, {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }

  getMessages() {
    return this.client.get(this.url + "/messages");
  }

  setuserphoto(formdata) {
    return this.client.put(this.url + "/users", formdata);
  }

  // deletemessage() {
  // const messagedata = JSON.parse(localStorage.getItem(messageId)).result;

  //return this.client.delete(this.url + `/messages/${messagedata.messageId}`, {
  //headers: { Authorization: `Bearer ${messagedata.token}` },
  //});
  //}
}
export default DataService;
