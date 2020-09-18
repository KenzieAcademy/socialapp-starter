import React from "react";

function Message(props) {
  return (
    <li>
      {props.username} posted:
      <div>{props.text}</div>
      <div>{props.likes.length}</div>
    </li>
  );
}

export default Message;
