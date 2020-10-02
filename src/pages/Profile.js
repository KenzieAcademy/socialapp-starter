import React from "react";
import UserMessagesDisplay from "../components/userMessagesDisplay/UserMessagesDisplay";
import Menu from "../components/menu/Menu";
import ProfilePictureParent from "../components/profilePictureParent/ProfilePictureParent";
import UserDataService from "../services/UserDataService";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../services/DataService";
import "./Profile.css";

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
          <div className="Row1">
            <Menu isAuthenticated={this.props.isAuthenticated} />
          </div>
          <div className="Row2">
            <div className="ProfileLeftColumn">
              <ProfilePictureParent
                isAuthenticated={this.props.isAuthenticated}
                usernameFromURL={this.props.match.params.username}
                loggedInUser={this.loggedInUser}
              />
            </div>
            <div className="ProfileRightColumn">
              <UserMessagesDisplay />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="Profile">
        <div className="Profile">
          <div className="Row1">
            <Menu isAuthenticated={this.props.isAuthenticated} />
          </div>
          <div className="Row2">
            <div className="ProfileLeftColumn">
              <ProfilePictureParent
                usernameFromURL={this.props.match.params.username}
              />
            </div>
            <div className="ProfileRightColumn">
              <UserMessagesDisplay />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
