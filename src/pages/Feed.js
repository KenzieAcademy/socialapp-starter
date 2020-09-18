import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../DataService.js";
import Message from "../components/message/Message";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.client = new DataService();
  }
  componentDidMount() {
    this.client.getMessages().then((response) => {
      this.setState({ messages: response.data.messages });
      console.log(response.data.messages);
    });
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div>
          <Menu />
          <h1>Message Feed</h1>
          <h3>Loading..</h3>
        </div>
      );
    }

    return (
      <div className="Feed">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Message Feed</h1>
        <h2>Messages</h2>
        <h2>Messages</h2>
        <ul>
          {this.state.messages.map((messageObject) => {
            return <Message {...messageObject} />;
          })}
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(Feed);
