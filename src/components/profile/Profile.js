import React from "react";
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
import ProfileUserCard from "../profileUserCard/ProfileUserCard";
import GetUsers from "../getusers/GetUsers";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfileUserCard />
        <h2>Get Users</h2>
        <GetUsers/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
