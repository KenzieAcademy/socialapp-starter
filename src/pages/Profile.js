import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
          <img src="" alt="profile-pic" />
          <button>change photo</button>
        </div>
        <div>update user</div>
        <div>delete user</div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
