import React from "react";
// import AddLikes from "../components/addLikes/AddLikes";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";

class Feed extends React.Component {
  render() {
    return (
      <div className="Feed">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <MessageList />
      </div>
    );
  }
}

export default userIsAuthenticated(Feed);
