import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <li className="messageList">
          At {new Date(this.props.createdAt).toDateString()}
          {this.props.username}
          <div className="textDiv">{this.props.text}</div>
          <div className="likesDiv">{this.props.likes.length}</div>
        </li>
      </div>
    );
  }
}

export default Message;
