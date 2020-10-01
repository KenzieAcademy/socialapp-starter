import React from "react";
import Menu from "../components/menu/Menu";
import Api from "../pages/dataService";
import { userIsAuthenticated } from "../redux/HOCs";
import Message from "../components/message/Message";
import MessageFeed from "../components/messagefeed/MessageFeed";
import MessageInbox from "../components/messageinbox/MessageInbox";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.client = new Api();
    this.state = { messages: [] };
  }
  componentDidMount() {
    this.client.getMessages().then((response) => {
      this.setState({ messages: response.data.messages });
    });
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageList">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h1>MessageList</h1>
          <h3>LOADING...</h3>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Message Feed</h1>
        <MessageInbox />
        <ul>
          {this.state.messages.map((messageObject) => {
            return (
              <Message
                messageId={messageObject.id}
                key={messageObject.id}
                {...messageObject}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageList);
