import { Input } from "antd";
import React from "react";
import Dataservice from "../../pages/dataService";

const MessageInbox = (props) => {
  const onChange = (e) => {
    console.log(e);

    this.client = new Dataservice();
  };

  return (
    <div>
      <p className="messinbox">Message</p>
      <Input
        size="large"
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
