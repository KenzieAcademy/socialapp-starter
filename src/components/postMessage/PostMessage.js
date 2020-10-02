import React from "react";
import { Input } from "antd";
const { TextArea } = Input;
function PostMessage(props) {
  return (
    <div className="messageForm">
      <form id="message-form" onSubmit={props.handlePostMessage}>
        <label htmlFor="text">Tell us what you're thinking!</label>
        <br />
        <TextArea
          rows={4}
          maxLength="255"
          type="text"
          name="text"
          required
          onChange={props.handleChange}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostMessage;
