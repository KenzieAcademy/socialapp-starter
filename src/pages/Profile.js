import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileContent from "../components/profileContent/ProfileContent";
import "../pages/Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="Body">
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <div className="ProfileHeader">My Profile</div>
          <ProfileContent />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
