import React from "react";
import GetDisplayName from "../getDisplayName/GetDisplayName";

function Message(props) {
  if (props.key) {
    return <div>LOADING</div>;
  } else {
    return (
      <li key={props.keyId} className="Message">
        At {new Date(props.createdAt).toDateString()}{" "}
        <GetDisplayName username={props.username} /> posted:
        <div className="message-text">{props.text} </div>
        <div className="likes">Likes: {props.likes.length}</div>
      </li>
    );
  }
}

export default Message;
