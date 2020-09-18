import React from "react";
import LikeButton from "../components/likebutton/LikeButton";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import Logout from "../components/logoutButton/LogoutButton";
import DeleteMessage from "../components/deleteMessage/DeleteMessage";
//import ConfirmProp from "../components/comfimPrompt/ConfirmProp";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        {/* <UploadPhoto /> */}
        <Logout />
        <LikeButton />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
