import React from "react";
import { Input } from "antd";

function PostMessage(props) {
  return (
    <div className="messageForm">
      <form id="message-form" onSubmit={props.handlePostMessage}>
        <label htmlFor="text">Tell us what you're thinking!</label>
        <Input type="text" name="text" required onChange={props.handleChange} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostMessage;
