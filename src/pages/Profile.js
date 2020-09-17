import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DeleteUser from '../components/deleteUser/DeleteUser'
import PostMessage from "../components/message/PostMessage";

import ProfileFeed from '../components/profileFeed/ProfileFeed'

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        
        <DeleteUser 
        username={this.props.user}
        />

        <PostMessage />

        <ProfileFeed />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
