import React from "react";
import Message from "../components/message/Message";
import DataService from "../DataService";
import CreateMessage from "../components/createMessage/CreateMessage";

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
    this.setState((state) => {
      return { refresh: !state.refresh };
    });
    this.client.getAllMessagesData().then((response) => {
      this.setState({
        messages: response.data.messages,
      });
    });
    console.log(this.state.refresh);
  };

  handleCreationStatus = (messageData) => {
    console.log(this.state.messages);
    this.setState((state) => {
      return { message: [messageData] };
    });
  };

  render() {
    if (!this.state.messages) {
      return (
        <div className="MessageList">
          <CreateMessage
            isSubmitted={this.state.isSubmitted}
            handleSubmit={this.handleSubmit}
            handleRefresh={this.handleRefresh}
            handleCreationStatus={this.handleCreationStatus}
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
            handleRefresh={this.handleRefresh}
            handleCreationStatus={this.handleCreationStatus}
          />
          <ul>
            {this.state.messages.map((msgObj) => (
              <Message
                keyId={msgObj.id}
                {...msgObj}
                handleSubmit={this.handleSubmit}
                handleRefresh={this.handleRefresh}
                handleCreationStatus={this.handleCreationStatus}
                refresh={this.state.refresh}
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
            handleCreationStatus={this.handleCreationStatus}
          />
          <ul>
            {this.state.messages.map((msgObj) => (
              <Message
                keyId={msgObj.id}
                {...msgObj}
                handleSubmit={this.handleSubmit}
                handleRefresh={this.handleRefresh}
                handleCreationStatus={this.handleCreationStatus}
                refresh={this.state.refresh}
              />
            ))}
          </ul>
        </div>
      );
  }
}

export default MessageList;
