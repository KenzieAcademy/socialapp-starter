import React from "react";
<<<<<<< HEAD
import DeleteAcctButton from "../components/deleteacct/DeleteAcct";
=======
import LikeButton from "../components/likebutton/LikeButton";
>>>>>>> setuserpic
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
<<<<<<< HEAD
        <DeleteAcctButton />
=======
        <UploadPhoto />
        <Logout />
        <LikeButton />
>>>>>>> setuserpic
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
