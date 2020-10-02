import React from "react";
import DataService from "../dataService";
import { userIsAuthenticated } from "../redux/HOCs";

// import { message, Result } from "antd";
import Message from "../components/message/Message";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }

  state = { messages: [] };

  componentDidMount() {
    // const test = this.client.getMessages();
    // console.log(test);

    this.client
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="loading">
          <h3>loading</h3>
        </div>
      );
    }
    return (
      <div className="messagefeed" style={{ fontFamily: "sans-serif" }}>
        {/* <Menu isAuthenticated={this.props.isAuthenticated} /> */}
        {/* messages go here test */}
      <div className="messagefeed">
        {/* <Menu isAuthenticated={this.props.isAuthenticated} /> */}
        {/* messages go here test */}
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
