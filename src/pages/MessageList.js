import React from "react";
import Message from "../components/message/Message";
import DataService from "../DataService";
import CreateMessage from "../components/createMessage/CreateMessage";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      isSubmitted: false,
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.client.getAllMessagesData().then((response) => {
      console.log(response);
      this.setState({
        messages: response.data.messages,
      });
    });
  }

  handleSubmit = () => {
    this.setState({ isSubmitted: !this.state.isSubmitted });
    this.client.getAllMessagesData().then((response) => {
      console.log(response);
      this.setState({
        messages: response.data.messages,
      });
    });
  };

  render() {
    if (!this.state.messages) {
      return (
        <div className="MessageList">
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
          />
          <h1>MessageList</h1>
          <h3>Loading...</h3>
        </div>
      );
    }


    if (!this.state.isSubmitted) {
      return (
        <div className="MessageList">
          <h1>Message Feed</h1>
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
          />
          <ul>
            {this.state.messages.map((msgObj) => (
              <Message keyId={msgObj.id} {...msgObj} />
            ))}
          </ul>
        </div>
      );
    } else
      return (
        <div className="MessageList">
          <h1>Message Feed</h1>
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
          />
          <ul>
            {this.state.messages.map((msgObj) => (
              <Message keyId={msgObj.id} {...msgObj} />
            ))}
          </ul>
        </div>
      );

  }
}

export default MessageList;