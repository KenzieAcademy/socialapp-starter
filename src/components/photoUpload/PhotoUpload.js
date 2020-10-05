import React from "react";
import DataService from "../../DataService";

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      formData: null,
      imageURL: "",
      now: Date.now(),
    };
  }

  componentDidMount() {
    const now = Date.now();
    this.client.getUserPhoto(this.props.username, now).then((result) => {
      this.setState({ imageURL: result.config.url, hasImage: true });
    });
  }

  createFormData = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);
    this.setState({ formData }, this.handleUpload);
  };
  setFallBackImage = (event) => {
    event.target.src = "https://gravatar.com/avatar/?d=mp";
  };
  handleUpload = () => {
    this.client
      .uploadPhoto(this.props.username, this.state.formData, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "Upload Progress" +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        if (res.data.statusCode === 200) {
          const now = Date.now();
          this.client.getUserPhoto(this.props.username, now).then((result) => {
            this.setState({ imageURL: result.config.url });
          });
        }
      });
  };

  render() {
    return (
      <div className="FileUploader">
        <input
          type="file"
          name="image-upload"
          id="img-upload"
          accept="image/*"
          onChange={this.createFormData}
        />

        <div className="image-preview">
          <img
            all="user"
            src={this.state.imageURL}
            onError={this.setFallBackImage}
            width={200}
          />
        </div>
      </div>
    );
  }
}

export default PhotoUpload;
