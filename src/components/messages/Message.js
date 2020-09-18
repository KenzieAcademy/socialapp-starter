import React from "react";
import LikeButton from "../likeButton/LikeButton";

class Message extends React.Component {
  render() {
    return (
      <li className="Message">
        {this.props.username} at {new Date(this.props.createdAt).toDateString},
        posted:
        <div className="messageText">{this.props.text}</div>
        {/*<div className="likes">Likes: {this.props.likes.length}</div>*/}
        <LikeButton
          className="likeButton"
          likesArray={this.props.likes}
          messageId={this.props.id}
        />
      </li>
    );
  }
}

export default Message;
