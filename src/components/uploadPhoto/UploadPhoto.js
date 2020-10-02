import React, { Component } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Dataservice from "../../pages/dataService";
class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      picture: "",
    };

    this.onImageChange = this.onImageChange.bind(this);
    this.setPicture = this.setPicture.bind(this);
    this.client = new Dataservice();
  }
  setPicture = () => {
    this.client.setPicture(this.props.messageId).then((response) => {
      console.log(response.data);
    });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Upload Image</h1>

            <Avatar
              size={150}
              src={this.state.image}
              alt={this.props.userName}
              icon={<UserOutlined />}
            />
            <input
              type="file"
              name="myImage"
              onChange={this.onImageChange}
              src={this.setPicture}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UploadPhoto;
