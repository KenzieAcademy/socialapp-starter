// //import the axios HTTP client to communicate with the API
// import axios from 'axios';

// class DataService {

//     constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
//     this.url = url;
//     this.client = client;
//     }     
    
//     registerUser(registrationData){
//         return this.client.post(this.url +"/users", registrationData);
//     }
//     editProfile(createBioData){
//       return this.client.patch(this.url +"/users",createBioData);
//  }
//     getMessages(limit = 20){
//         return this.client.get(`/messages?limit=${limit}`)
//     }
// }


// export default DataService;
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
<<<<<<< HEAD
    return this.client.get(this.url + "messages");
=======
    return this.client.get(this.url + "messages?limit=15");
>>>>>>> 6d6aa202e71895d47dfe6f16db56548337bf7196
  }

  getMessageData(messageId) {
    return this.client.get(this.url + "messages/" + messageId);
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

  getUserPhoto(username) {
    return this.client.get(this.url + "users/" + username + "/picture");
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
}

export default DataService;