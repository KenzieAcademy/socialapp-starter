import React from "react";
import { Divider, Header } from "semantic-ui-react";
import Menu from "../components/menu/Menu";
import ProfilePictureParent from "../components/profilePictureParent/ProfilePictureParent";
import UpdateUserInfoForm from "../components/updateUserInfoForm/UpdateUserInfoForm";
import DeleteUser from "../components/deleteUser/DeleteUser";
import UserDataService from "../services/UserDataService";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../services/DataService";
import UploadProfilePicture from "../components/uploadProfilePicture/UploadProfilePicture";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAboutInfo: null,
    };

    //Gets User Login
    this.loggedInUser = new DataService().getUsername();
  }

  render() {
    if (this.props.match.params.username === this.loggedInUser) {
      return (
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <Header as="h2">Welcome, {this.loggedInUser}</Header>
          <ProfilePictureParent
            isAuthenticated={this.props.isAuthenticated}
            usernameFromURL={this.props.match.params.username}
          />
          <Divider />
          <Header>User Controls</Header>
          <UploadProfilePicture />
          <UpdateUserInfoForm />
          <DeleteUser />
        </div>
      );
    }

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <ProfilePictureParent
          usernameFromURL={this.props.match.params.username}
        />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
