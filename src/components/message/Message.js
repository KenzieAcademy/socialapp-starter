import React from "react";

function Message(props) {
  if (props.key) {
    return <div>LOADING</div>;
  } else {
    return (
      <li className="Message">
        At {new Date(props.createdAt).toDateString()} {props.username} posted:
        <div className="message-text">{props.text} </div>
        <div className="likes">Likes: {props.likes.length}</div>
      </li>
    );
  }
}

export default Message;
