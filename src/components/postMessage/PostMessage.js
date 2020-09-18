import React from "react";

function PostMessage(props) {
  return (
    <div className="messageForm">
      <form id="message-form" onSubmit={props.handlePostMessage}>
        <label htmlFor="text">Tell us what you're thinking!</label>
        <input type="text" name="text" required onChange={props.handleChange} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostMessage;
