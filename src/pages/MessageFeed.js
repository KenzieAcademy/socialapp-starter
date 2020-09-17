import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <div className="MessageFeed">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Messages</h2>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
