import React from "react";
import { Input } from "antd";
import Dataservice from "../../pages/dataService";

class MessageForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.createMessage}>
        <label>
          <span>
            Message:
            <Input
              size="large"
              placeholder="message here"
              allowClear
              type="text"
              value={this.props.text}
              onChange={this.props.handleChange}
            />
            <input type="submit" value="Submit" />
          </span>
        </label>
      </form>
    );
  }
}

export default MessageForm;
