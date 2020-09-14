import React from "react";
import Menu from "../components/menu/Menu";
import Message from "../pages/Messagefeed";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Message />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
