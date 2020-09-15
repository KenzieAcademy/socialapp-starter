import React from "react";
<<<<<<< HEAD:src/pages/Profile.js
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileUserCard from "../components/profileUserCard/ProfileUserCard"
=======
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
>>>>>>> 0ba5a32b19835e59b06d006676446e9e9d38b252:src/components/profile/Profile.js

class Profile extends React.Component {
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

export default userIsAuthenticated(Profile);
