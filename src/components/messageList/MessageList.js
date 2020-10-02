import React from "react";
import Message from "../message/Message";
import DataService from "../../DataService";
import PostMessage from "../postMessage/PostMessage";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: "",
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

  handlePostMessage = (e) => {
    e.preventDefault();
    console.log("using handlepost");
    this.client.postMessage({ text: this.state.text }).then((result) => {
      this.setState((state) => ({
        messages: [result.data.message, ...state.messages],
      }));
    });
    e.target.reset();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  poller() {
    this.client.getMessageList().then((response) => {
      if (this.state.messages.length !== response.data.messages.length) {
        this.setState({ messages: response.data.messages });
      }
    });
  }

  handlePoll = () => {
    setInterval(this.poller, 1000);
  };

  render() {
    if (this.state.messages === []) {
      return;
    }
    console.log(this.state.messages);
    return (
      <div className="messageList">
        <PostMessage
          handleChange={this.handleChange}
          handlePostMessage={this.handlePostMessage}
        />
        <h1>Message feed</h1>
        <ul>
          {this.state.messages.map((messageObject) => (
            <Message
              handleDeleteMesssage={this.handleDeleteMesssage}
              key={messageObject.id}
              {...messageObject}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;
