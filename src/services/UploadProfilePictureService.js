import axios from 'axios'

class UploadProfilePictureService {
    constructor(
      url = "https://socialapp-api.herokuapp.com",
      client = axios.create()
    ) {
      this.url = url;
      this.client = client;
    }
  
    uploadProfilePicture(Picture) {
      let loginData = JSON.parse(localStorage.getItem("login"));
  
      return this.client.put(this.url + "/users/" + loginData.result.username + "/picture", Picture, {
        headers: {
          Authorization: `Bearer ${loginData.result.token}`,
        },
      });
    }
  }

  export default UploadProfilePictureService