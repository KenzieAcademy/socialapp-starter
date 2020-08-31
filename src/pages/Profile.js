import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>This is a profile</h2>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
