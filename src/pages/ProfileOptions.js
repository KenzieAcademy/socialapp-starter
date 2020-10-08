import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu";
import DeleteUserButton from "../components/deleteUserButton/DeleteUserButton";
import UpdateAbout from "../components/updateAbout/UpdateAbout";
import PhotoUpload from "../components/photoUpload/PhotoUpload";
import "./PageStyles.css";

class ProfileOptions extends React.Component {
  constructor(props) {
    super(props);
    let loginData = JSON.parse(localStorage.getItem("login"));

    this.state = {
      isDeleted: false,
      username: loginData.result.username,
      loading: false,
    };
  }

  handleHome = () => {
    window.location.pathname = "/";
  };

  handleDeleteUserUpdate = () => {
    this.setState({ isDeleted: true });
  };
  render() {
    if (this.state.isDeleted) {
      return (
        <div className="isDeletedScreen">
          <h1>This user profile has been deleted!</h1>
          <h2>Please return to the login page</h2>
          <button onClick={this.handleHome}>Login Page</button>
        </div>
      );
    }
    return (
      <div className="ProfileOptions">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Settings</h2>
        <div className="SettingsBody">
          <br />

          <h3>Update Picture :</h3>
          <PhotoUpload
            username={this.state.username}
            loading={this.state.loading}
          />

          <br />
          <h3>Update About :</h3>
          <UpdateAbout />
          <br />
          <br />
        </div>
        <h3>Delete User: </h3>
        <DeleteUserButton
          handleDeleteUserUpdate={this.handleDeleteUserUpdate}
        />
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileOptions);
