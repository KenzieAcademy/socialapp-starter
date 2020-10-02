import React from "react";
import DataService from "../dataService";
import { userIsAuthenticated } from "../redux/HOCs";

// import { message, Result } from "antd";
import Message from "../components/message/Message";
import CreateMessage from "./CreateMessage";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }

  state = { messages: [] };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.client.getMessages().then((response) =>
        this.setState({
          messages: response.data.messages,
        })
      );
    }, 5000);
  }

  // this.client
  // .getMessages()
  // .then((response) => this.setState({ messages: response.data.messages }));
  //}

  // setInterval(componentDidMount(), 5000);
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="loading">
          <p>loading</p>
        </div>
      );
    }

    return (
      <div className="messagefeed">
        <CreateMessage />
        <ul>
          {this.state.messages.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
