import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import GetUsers  from "../components/getUsers/GetUsers";
import DeleteUser from "../components/deleteUser/DeleteUser";
import GetMessages from "../components/getMessages/GetMessages";
import PostLikes from "../components/postLikes/PostLikes";

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <GetUsers />
        <DeleteUser />
        <GetMessages />
        <PostLikes />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
