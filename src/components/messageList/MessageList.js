import React from "react";
import Message from "../message/Message";
import DataService from "../../DataService";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.client
      .getMessageList()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  render() {
    return (
      <div className="messageList">
        <h1>Message feed</h1>
        <ul>
          {this.state.messages.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;
