import React from "react";
import GetDisplayName from "../getDisplayName/GetDisplayName";
import LikeButton from "../likeButton/LikeButton";

function Message(props) {
  if (props.key) {
    return <div>LOADING</div>;
  }
  return (
    <li key={props.keyId} className="Message">
      At {new Date(props.createdAt).toDateString()}{" "}
      <GetDisplayName username={props.username} /> posted:
      <div className="message-text">{props.text} </div>
      <LikeButton messageId={props.id} />
      <div className="likes">Likes: {props.likes.length}</div>
    </li>
  );
}

export default Message;
