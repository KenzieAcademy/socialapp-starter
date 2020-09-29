  
import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UserList from "../components/userList/UserList"
import Avatar from "../components/avatar/Avatar"

import GetUsers from "../components/getUsers/GetUsers";
import DeleteUser from "../components/deleteUser/DeleteUser";
import GetProfile from '../components/getProfile/GetProfile';
import UpdateUser from '../components/updateUser/UpdateUser'

import GetMessages from "../components/getMessages/GetMessages";

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Kwitter-Profile</h2>
        <UserList />
        
        <Avatar />

        <h2>Profile</h2>
        
        <GetMessages />
        <h2>Profile</h2>
        <GetProfile isAuthenticated={this.props.isAuthenticated} />
        <GetUsers isAuthenticated={this.props.isAuthenticated}/>
        <UpdateUser isAuthenticated={this.props.isAuthenticated} />
        <br />
        <DeleteUser isAuthenticated={this.props.isAuthenticated}/>
      </div>
      
    )
  }
}

export default userIsAuthenticated(Profile);