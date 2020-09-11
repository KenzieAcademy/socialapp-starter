import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DeleteUser from '../components/deleteUser/DeleteUser'
import PostMessage from "../components/message/PostMessage";
import Feed from '../components/feed/Feed';

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

        <Feed />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
