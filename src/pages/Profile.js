import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import "../components/assets/stylesheets/Profile.css";
import UploadImage from "../components/imageUpload/UploadImage";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-bg">
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>Profile</h2>
          <UploadImage isAuthenticated={this.props.isAuthenticated} />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
