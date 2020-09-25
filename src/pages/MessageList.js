import React from "react";
import Message from "../components/message/Message";
import DataService from "../DataService";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
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

  render() {
    if (!this.state.messages) {
      return (
        <div className="MessageList">
          <h1>MessageList</h1>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <h1>Message Feed</h1>
        <ul>
          {this.state.messages.map((msgObj, i) => (
            <Message keyId= {msgObj.id} {...msgObj} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;
