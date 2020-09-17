import React from "react";
import "../message/Message.css";

class Message extends React.Component {
  render() {
    return (
      <form class="ui form form-control">
        <div class="field message-post-textarea">
          <textarea placeholder="Send your signal" rows="3"></textarea>
        </div>
        <div class="field postBtn">
          <button class="ui button">Send</button>

          <li className="Message">
            <strong>{this.props.username}</strong> on{" "}
            {new Date(this.props.createdAt).toDateString()} posted:
            <div className="message-text">{this.props.text}</div>
            <div className="likes">Likes: {this.props.likes}</div>
          </li>
        </div>
      </form>
    );
  }
}

export default Message;
