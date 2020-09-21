import React from "react";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
import { userIsAuthenticated } from "../redux/HOCs";
import "../components/updateUser/UpdateUser.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div id="left-column">
          <h2>Display Name</h2>
          <UpdateUser />
        </div>
        <div id="right-column">
          <h2>About Me</h2>
          <p>The component for this user's bio will go here.</p>
          <h2>Messages</h2>
          <p>
            The component for this user's own messages will go here.
            <br />
            They should also be able to post a new message from here too.
          </p>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
