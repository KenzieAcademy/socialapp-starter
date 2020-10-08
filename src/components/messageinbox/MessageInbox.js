import { Input } from "antd";
import React from "react";
import Dataservice from "../../pages/dataService";

class MessageInbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: { text: "" },
    };

    this.writeMessage = this.writeMessage.bind(this);
    this.client = new Dataservice();
  }
  writeMessage = () => {
    this.client.createMessage(this.props.messageId).then((response) => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div>
        <p className="messinbox">Message</p>
        <Input
          size="large"
          className="mess"
          placeholder="message here"
          allowClear
          onClick={this.writeMessage}
        />
        <br />
      </div>
    );
  }
}
export default MessageInbox;
