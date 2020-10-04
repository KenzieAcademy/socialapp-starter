import React from "react";
import Message from "../message/Message";
import DataService from "../../DataService";
import CreateMessage from "../createMessage/CreateMessage";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isSubmitted: false,
      refresh: false,
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
    this.setState((state) => {
      return { isSubmitted: !state.isSubmitted };
    });
  };

  handleRefresh = () => {
    this.setState({ refresh: true });
    this.client.getAllMessagesData().then((response) => {
      this.setState({
        messages: response.data.messages,
      });
      this.setState({ refresh: false });
    });
  };

  render() {
    if (!this.state.messages || this.state.refresh) {
      return (
        <div className="MessageList">
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
            handleRefresh={this.handleRefresh}
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
              <Message
                keyId={msgObj.id}
                {...msgObj}
                handleRefresh={this.handleRefresh}
              />
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
            handleRefresh={this.handleRefresh}
          />
          <ul>
            {this.state.messages.map((msgObj) => (
              <Message
                keyId={msgObj.id}
                {...msgObj}
                handleRefresh={this.handleRefresh}
              />
            ))}
          </ul>
        </div>
      );
  }
}

export default MessageList;
