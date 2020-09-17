import React from "react";
import Menu from "../components/menu/Menu";
import api from "../pages/dataService";
import Message from "../components/message/Message";

class MessageList extends React.Component {
  state = { messages: [] };
  componentDidMount() {
    api.getMessages().then((response) => console.log(response));
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageList">
          <Menu />
          <h1>MessageList</h1>
          <h3>LOADING...</h3>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <Menu />
        <h1>Message Feed</h1>
        <ul>
          {this.state.messages.map((messageObject) => {
            return <Message key={messageObject.id} {...messageObject} />;
          })}
        </ul>
      </div>
    );
  }
}

export default MessageList;
