import React from "react";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import { userIsAuthenticated } from "../redux/HOCs";

class EditUser extends React.Component {
  render() {
    return (
      <div className="Profile-editable">
        <Menu loggedIn={true} isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UpdateUser />
      </div>
    );
  }
}

export default userIsAuthenticated(EditUser);
