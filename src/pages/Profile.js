import React from "react";
import LikeButton from "../components/likebutton/LikeButton";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UploadPhoto from "../components/uploadPhoto/UploadPhoto";
import Logout from "../components/logoutButton/Logout";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UploadPhoto />
        <Logout />
        <LikeButton />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
