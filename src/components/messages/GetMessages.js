import React from "react";
import { Feed, Icon, Loader } from "semantic-ui-react";
import MessageService from "../../services/MessageService";
import Message from "./Message";

class GetMessages extends React.Component {
  state = { messages: [] };

  rerenderMessages = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    MessageService.obtainMessages().then((response) => {
      this.setState({ messages: response.data.messages });
      console.log(response.data.messages);
    });
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="messageList">
          <h1>Message List</h1>
          <Loader size="massive" active />
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div className="messageList">
        <h1>Message List</h1>
        <ul>
          <Feed>
            {this.state.messages.map((messageObject) => (
              <Message key={messageObject.id} {...messageObject} />
            ))}
          </Feed>
        </ul>
      </div>
    );
  }
}

export default GetMessages;
