import React from "react";
import { Header } from "semantic-ui-react";
import Menu from "../components/menu/Menu";
import UpdateUserInfoForm from "../components/updateUserInfoForm/UpdateUserInfoForm"
import { userIsAuthenticated } from "../redux/HOCs";
import DeleteUser from "../components/deleteUser/DeleteUser";
import deleteUserService from "../services/DeleteUserService";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.name
    }
  }
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Header as='h2'>Welcome, {this.props.name}</Header>
        <UpdateUserInfoForm />
        <h2>Profile</h2>
        <DeleteUser />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
