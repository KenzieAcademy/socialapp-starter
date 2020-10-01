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
    this.client
      .getMessageList()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  handleDeleteMesssage = (messageId) => {
    const dataService = new DataService();
    dataService.deleteMessage(messageId).then((response) => {
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

  render() {
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
