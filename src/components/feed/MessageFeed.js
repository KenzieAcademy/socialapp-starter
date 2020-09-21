import React from "react";
import {Comment, Avatar} from 'antd';



class MessageFeed extends React.Component {
  render() {
    return (
      <div className="MessageFeed">
        <p>Message Feed</p>
        <Comment
        type="form"
        name="message"
        placeholder="Add your message here!"

        />
      </div>
      
    );
  }
}

export default MessageFeed;
