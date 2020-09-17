import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DeleteUser from "../components/deleteUser/DeleteUser";
import deleteUserService from "../services/DeleteUserService";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <DeleteUser />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
