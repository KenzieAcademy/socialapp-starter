import React from "react";
import { Divider, Header } from "semantic-ui-react";
import Menu from "../components/menu/Menu";
import ProfilePictureDisplay from "../components/profilePictureDisplay/ProfilePictureDisplay";
import UploadProfilePicture from "../components/uploadProfilePicture/UploadProfilePicture";
import UpdateUserInfoForm from "../components/updateUserInfoForm/UpdateUserInfoForm";
import DeleteUser from "../components/deleteUser/DeleteUser";
import UserDataService from "../services/UserDataService";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name,
    };

    this.UserDataService = UserDataService;
    this.loginData = JSON.parse(localStorage.getItem("login"));
    console.log(this.props.match);
    console.log(
      UserDataService.getDirectUser(
        this.props.match.params.username
      ).then((result) => console.log(result))
    );
  }

  render() {
    if (this.props.match.params.username === this.loginData.result.username) {
      return (
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <Header as="h2">Welcome, {this.loginData.result.username}</Header>
          <ProfilePictureDisplay
            usernameFromURL={this.props.match.params.username}
          />
          <Divider />
          <UploadProfilePicture />
          <UpdateUserInfoForm />
          <h2>Profile</h2>
          <DeleteUser />
        </div>
      );
    }

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <ProfilePictureDisplay
          usernameFromURL={this.props.match.params.username}
        />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
