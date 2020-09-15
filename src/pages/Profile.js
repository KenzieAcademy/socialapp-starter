import React from "react";
import {Image, Upload, Button } from 'antd';
import "antd/dist/antd.css"
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import Icon from "@ant-design/icons/lib/components/Icon";

class Profile extends React.Component {
  super(props) {
    this.state = {
      username: [],
      picture: "",
    }
  }

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Your Profile Page</h2>
        <Image></Image>
        <Upload
         name="file" customRequest={this.dummyRequest} accept=".png"
        ><Button Icon type="Upload">Upload Profile picture here!</Button></Upload>
        <button>Save picture</button>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
