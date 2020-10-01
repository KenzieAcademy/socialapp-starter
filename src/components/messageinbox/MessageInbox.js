import { Input } from "antd";
import React from "react";

const MessageInbox = (props) => {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <p className="messinbox">Message</p>
      <Input
        className="mess"
        placeholder="message here"
        allowClear
        onChange={onChange}
      />
      <br />
    </div>
  );
};
export default MessageInbox;
