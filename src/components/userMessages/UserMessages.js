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
    // As soon as the app loads we get our message list and set our state to that array of objects.
    this.client
      .getMessageList()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  handleDeleteMesssage = (messageId) => {
    this.client.deleteMessage(messageId).then((response) => {
      console.log(response.data);
      this.client
        .getMessageList()
        .then((response) =>
          this.setState({ messages: response.data.messages })
        );
    });
  };

  render() {
    if (this.state.messages === []) {
      return <h1>loading...</h1>;
    }

    return (
      <div className="messageList">
        {this.state.messages
          .filter((usersMessage) => {
            return usersMessage.username === this.client.getUserName();
          })
          .map((usersMessage) => (
            <Message
              handleDeleteMesssage={this.handleDeleteMesssage}
              key={usersMessage.id}
              {...usersMessage}
            />
          ))}
      </div>
    );
  }
}

export default MessageList;
