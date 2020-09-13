import React from "react";
import Menu from "../components/menu/Menu";
import FootNavBar from "../components/footNavBar/FootNavBar";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <FootNavBar isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
