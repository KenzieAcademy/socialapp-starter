import React, { useState } from "react";
import "../messages/MessageBox.css";
import { Avatar, Button } from "@material-ui/core";

function MessageBox() {
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

    setPostMessage("");
    setPostImage("");
  };

  return (
    <div className="messageBox">
      <form>
        <div className="messageBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setPostMessage(e.target.value)}
            value={postMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
          className="messageBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendPost}
          type="submit"
          className="messageBox__postButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default MessageBox;
