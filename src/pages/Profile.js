import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UserList from "../components/userList/UserList"
import GetUsers from "../components/getUsers/GetUsers"
import DeleteUser from "../components/deleteUser/DeleteUser";


class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Kwitter-Profile</h2>
        <UserList />
        <GetUsers />
        <DeleteUser />
      </div>
    )
  }
}

export default userIsAuthenticated(Profile);