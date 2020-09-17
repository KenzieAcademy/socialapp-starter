import React from "react";

class Message extends React.Component {
  render() {
    return (
      <li className="Message">
        {this.props.username} at {new Date(this.props.createdAt).toDateString},
        posted:
        <div className="messageText">{this.props.text}</div>
        <div className="likes">Likes: {this.props.likes.length}</div>
      </li>
    );
  }
}

export default Message;
