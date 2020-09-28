  
import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UserList from "../components/userList/UserList"
import Avatar from "../components/avatar/Avatar"


class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Kwitter-Profile</h2>
        <UserList />
        
        <Avatar />

      </div>
      
    )
  }
}

export default userIsAuthenticated(Profile);