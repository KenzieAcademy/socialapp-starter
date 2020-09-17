import React from "react";
import MessageFeed from "../components/messagefeed/MessageFeed";

class MessageList extends React.Component {
  render() {
    return (
      <div className="messageList">
        <MessageFeed />
      </div>
    );
  }
}

export default MessageList;
