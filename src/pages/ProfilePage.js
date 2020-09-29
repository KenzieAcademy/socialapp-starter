import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileUserCard from "../components/profileUserCard/ProfileUserCard";



class ProfilePage extends React.Component {
  render() {
    return (
      
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfileUserCard />
      </div>
    );
  }
}

export default userIsAuthenticated(ProfilePage);
