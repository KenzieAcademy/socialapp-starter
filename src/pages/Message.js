import React from "react";
import NewMessage from "../components/NewMessage/NewMessage"
import { userIsAuthenticated } from "../redux/HOCs";

class Message extends React.Component {
  render() {
    return (
      <div className="NewMessage">
        <NewMessage isAuthenticated={this.props.isAuthenticated} />
        <h2>New Message</h2>
      </div>
    );
  }
}

export default userIsAuthenticated(Message);
