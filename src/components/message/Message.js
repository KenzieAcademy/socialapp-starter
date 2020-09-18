import React from "react";
import { Comment } from "antd";
function Message(props) {
  return (
    <Comment
      avatar={props.pictureLocation}
      author={props.username}
      content={props.text}
      datatime={props.timestamp}
    />
  );
}

export default Message;
