import React from "react";
import CreateMessage from "../components/createMessage/CreateMessage";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <div className="Message">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Message</h2>
        <CreateMessage isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
