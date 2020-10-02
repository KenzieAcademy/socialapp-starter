import axios from 'axios'

class UploadProfilePictureService {
    constructor(
      url = "https://socialapp-api.herokuapp.com",
      client = axios.create()
    ) {
      this.url = url;
      this.client = client;
    }
  
    uploadProfilePicture(picture) {
      let loginData = JSON.parse(localStorage.getItem("login"));

      let requestFormData = new FormData()
      requestFormData.append('picture',picture)
  
      return this.client.put(this.url + "/users/" + loginData.result.username + "/picture", requestFormData, {
        headers: {
          Authorization: `Bearer ${loginData.result.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    }
  }

  export default UploadProfilePictureService