import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import GetUsers from "../components/getUsers/GetUsers";
import DeleteUser from "../components/deleteUser/DeleteUser";
import GetProfile from '../components/getProfile/GetProfile'

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <GetProfile isAuthenticated={this.props.isAuthenticated} />
        <GetUsers isAuthenticated={this.props.isAuthenticated}/>
        <DeleteUser isAuthenticated={this.props.isAuthenticated}/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
