import React from "react";
import DataService from "../../DataService";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

// const username = JSON.parse(localStorage.getItem("login")).result.username;
const client = new DataService();
class UploadPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: null,
      imageURL: `https://socialapp-api.herokuapp.com/users/${client.getUserName()}/picture`,
    };
  }
  createFormData = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);
    this.setState({ formData });
  };
  HandleUpload = () => {
    client.postUserPicture(this.state.formData).then((response) => {
      if (response.data.statusCode === 200) {
        this.updatePicture();
      }
    });
  };

  updatePicture() {
    const timeStamp = Date.now();
    const image = `https://socialapp-api.herokuapp.com/users/${client.getUserName()}/picture?t=${timeStamp}`;
    this.setState({ imageURL: image });
  }

  render() {
    return (
      <div className="FileUploader">
        <Avatar size={264} icon={<UserOutlined />} src={this.state.imageURL} />
        <br />
        <input
          type="file"
          name="picture"
          accept="image/jpeg, image/png,image/gif"
          onChange={this.createFormData}
        />
        <button onClick={this.HandleUpload}>Upload</button>
      </div>
    );
  }
}

export default UploadPicture;
