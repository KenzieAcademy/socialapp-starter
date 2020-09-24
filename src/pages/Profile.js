import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileContent from "../components/profileContent/ProfileContent"
class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfileContent/>
      </div>
    );
  }
}


export default userIsAuthenticated(Profile);

