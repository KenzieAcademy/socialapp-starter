import React from "react";

function MessageList(props) {
  if (props.messageArray.length > 0) {
    let likes = props.messageArray.map((message) => message.likes);
    console.log(likes);
    return props.messageArray.map((message) => (
      <div key={message.id} className="message">
        <h5>{message.username}</h5>
        <p>
          {message.text} Likes:{message.likes.length}
        </p>
        <button id={message.id} onClick={props.handleLike}>
          &#10084;
        </button>
        <button>Unlike</button>
      </div>
    ));
  }
  return <div>MessageList</div>;
}

export default MessageList;
