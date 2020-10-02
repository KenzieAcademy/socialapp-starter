import axios from "axios";

class MessageService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  postLike(messageId){
   const requestBody = {messageId}
    const config = {
      headers: {Authorization: `Bearer ${this.getToken()}`}
    }
    
    
    return this.client.post(
      this.url + "/likes",
      config,
      requestBody)
      
  
}

removeLike(likeId){
  const config = {
    headers: {
      Authorization: `Bearer ${this.getToken()}`,
    }}
  return this.client.delete(
    this.url + `/likes/${likeId}`, config
  )
}
  
  getToken() {
    const loginData = JSON.parse(localStorage.getItem("login"));
    const { token } = loginData.result;
    return token;
  }

  getUsername() {
    const loginData = JSON.parse(localStorage.getItem("login"));
    const { username } = loginData.result;
    return username;
  }

  postMessage(text) {
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        "Content-Type": "application/json",
      },
    };

    return this.client.post(this.url + "/messages", text, config);
  }

  uploadImage(formData) {
    const url = this.url + `/users/${this.getUsername()}/picture`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };

    return this.client.put(url, formData, config);
  }

  getMessage(messageId) {
    console.log(messageId);
    return this.client.get(this.url + `/messages/${messageId}`);
  }
}

export default MessageService;
