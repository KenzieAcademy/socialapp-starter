import React from "react";
import Menu from "../components/menu/Menu";
import DataService from "../services/DataService/DataService";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    this.client = new DataService();
  }

  getMessages() {
    return this.client.getMessages(10).then((result) =>
      this.setState({
        messages: result.data.messages,
      })
    );
  }

  componentDidMount() {
    this.getMessages();
  }

  render() {
    let messages = this.state.messages.map((message) => (
      <div>
        {message.text} {message.likes}
      </div>
    ));
    return (
      <div className="MessageBlock">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Messages</h1>
        <div className="messages">{messages}</div>
        <div className="NewMessage">New messages here</div>
      </div>
    );
  }
}

export default MessageFeed;
