import React from "react";

import Menu from "../menu/Menu";
import {userIsAuthenticated} from "../../redux/HOCs";

class DeleteUser extends React.Component {
  render() {
    return (
      <div className="DeleteUser">
        <Menu />
        <h2>Delete User</h2>
       
      </div>
    );
  }
}

export default userIsAuthenticated(DeleteUser);