import React, { useState } from "react";
import "../messages/MessageBox.css";
import { Avatar, Button } from "@material-ui/core";


function MessageBox() {
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

    ("posts").add({
      displayName: "",
      username: "",
      verified: true,
      text: postMessage,
      image: postImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFxVf7Fm9WZVg/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=ZTxrlE_DttjRzyEQpH2pDTh9hzPKYTUNgxi0h_8e6O8",
    });

    setPostMessage("");
    setPostImage("");
  };

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFxVf7Fm9WZVg/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=ZTxrlE_DttjRzyEQpH2pDTh9hzPKYTUNgxi0h_8e6O8" />
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
          className="postBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendPost}
          type="submit"
          className="postBox__postButton"
        >

          Post
        </Button>
      </form>
    </div>
  );
}


export default MessageBox;
