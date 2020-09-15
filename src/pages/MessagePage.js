import React from "react";
import NewMessage from "../components/NewMessage/NewMessage";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList"
class MessagePage extends React.Component {
  render() {
    return (
      <div className="MessagePage">
        <NewMessage isAuthenticated={this.props.isAuthenticated} />
        <h2>New Message</h2>
        <MessageList />
      </div>
    );
  }
}

export default userIsAuthenticated(MessagePage);
