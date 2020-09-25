import axios from "axios";

class DeleteUserMessagesService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  deleteUserMessage(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));

    return this.client.delete(this.url + "/messages/" + messageId, {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    });
  }
}

export default DeleteUserMessagesService;
