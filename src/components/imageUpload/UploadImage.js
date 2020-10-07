import React from "react";
import MessageService from "../messages/MessageService";

class UploadImage extends React.Component {
  client = new MessageService();
  state = {
    formData: null,
    imageUrl: `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture`,
  };

  createFormData = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);

    this.setState({ formData }, this.handleUpload() );
  };

  imageFallBack = (e) => {
    e.target.src = "https://picsum.photos/200";
  };

  handleUpload = () => {
    if (this.state.formData === null) return;

    this.client.uploadImage(this.state.formData).then( response => {
      if (response.data.statusCode === 200) {
        this.updatePicture();
      }
    });
  };

  updatePicture() {
    const timeStamp = Date.now();
    const imageUrl = `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture?t=${timeStamp}`;
    this.setState({ imageUrl });
  }

  render() {
    return (
      <div className="uploadImage">
        <input type="file" accept="image/*" name="picture" onChange={this.createFormData} />
        <button onClick={this.handleUpload}>Upload</button>
        <div className="profileImage">
          <img
            alt="user"
            src={this.state.imageUrl}
            width={200}
            onError={this.imageFallBack}
          />
        </div>
      </div>
    );
  }
}

export default UploadImage;
