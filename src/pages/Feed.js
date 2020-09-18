import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";
import PostMessage from "../components/postMessage/PostMessage";

class Feed extends React.Component {
  render() {
    return (
      <div className="Feed">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <PostMessage />

        <MessageList />
      </div>
    );
  }
}

export default userIsAuthenticated(Feed);
