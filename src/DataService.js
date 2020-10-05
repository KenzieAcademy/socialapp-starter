import axios from "axios";

// https://socialapp-api.herokuapp.com/docs/    for the API Documentation

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  registerUser(regisrationData) {
    return this.client.post(this.url + "users", regisrationData);
  }
  getAllMessagesData() {
    return this.client.get(this.url + "messages?limit=15");
  }

  getMessageData(messageId) {
    return this.client.get(this.url + "messages/" + messageId);
  }

  getUserList(limit, offset) {
    return this.client.get(`${this.url}users?limit=${limit}&offset=${offset}`);
  }

  deleteMessage(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.delete(this.url + "messages/" + messageId, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  createMessage(message /* a string*/) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "messages", message, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  handleLike(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "likes", messageId, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  handleUnlike(likeId) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.delete(this.url + "likes/" + likeId, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  getUser(username) {
    return this.client.get(this.url + "users/" + username);
  }

  getUserPhoto(username, t) {
    return this.client.get(this.url + "users/" + username + "/picture?t=" + t);
  }

  deleteUser(username) {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.delete(this.url + "users/" + username, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }

  updateAbout(username, about) {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.patch(this.url + "users/" + username, about, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
<<<<<<< HEAD
  uploadPhoto(username,formdata){
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.put(this.url + "users/" + username + "/picture", formdata,{
      
      headers: { Authorization: `Bearer ${loginData.result.token}` },

    })
  
  
    }
  }


=======
  uploadPhoto(username, formdata) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.put(
      this.url + "users/" + username + "/picture",
      formdata,
      {
        headers: { Authorization: `Bearer ${loginData.result.token}` },
      }
    );
  }
}
>>>>>>> 1febe8c4029cb35d688e3074e69142dc49fe5e31

export default DataService;
