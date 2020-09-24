import React from "react";
import BackEndServices from "../BackEndServices";
import Message from "../components/messages/Message";

class MessageFeed extends React.Component {
  state = { messages: [] };

  componentDidMount() {
    BackEndServices.getMessages().then((response) => {
      this.setState({ messages: response.data.messages })
    });
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="messageFeed">
          <h3>LOADING....</h3>
        </div>
      );
    }

    return (
      <div className="messageFeed">
        <h1>Our MessageFeed goes on this page</h1>
        <ul>
       {this.state.messages.map(
         messageObject => (
           <Message key={messageObject.id} {...messageObject} />
         )
       )}
        </ul>
      </div>
    );
  }
}

export default MessageFeed;
