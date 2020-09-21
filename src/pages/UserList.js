import React from "react";
import Menu from "../components/menu/Menu";
import GetUsers from "../components/getUsers/GetUsers";
import { userIsAuthenticated } from "../redux/HOCs";

class UserList extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu loggedIn={true} isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <GetUsers all="true"/>
      </div>
    );
  }
}

export default userIsAuthenticated(UserList);
