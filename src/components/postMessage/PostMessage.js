import React from "react";
import { Input, Affix } from "antd";
import "./PostMessage.css";
const { TextArea } = Input;
function PostMessage(props) {
  return (
    <Affix offsetTop={79}>
      <div className="messageForm">
        <form id="message-form" onSubmit={props.handlePostMessage}>
          <label htmlFor="text">Tell us what you're thinking!</label>
          <TextArea
            rows={4}
            maxLength={255}
            onPressEnter={props.handlePostMessage}
            type="text"
            name="text"
            value={props.text}
            required
            onChange={props.handleChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </Affix>
  );
}

export default PostMessage;
