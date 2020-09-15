import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import "./messageFeed/MessageFeed.css";
import DataService from "../services/DataService/DataService";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { text: "" },
      messages: [],
      messageSent: false,
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

  handleChange = (e) => {
    let newmessage = e.target.value;
    this.setState({ message: { text: newmessage } });
  };
  // reused from login form

  handleSubmit = (event) => {
    event.preventDefault();
    this.client.createMessage(this.state.message);
    this.setState({
      message: { text: "" },
      messageSent: true,
    });
    console.log("Message Sent!");
    return this.getMessages();
  };

  componentDidMount() {
    this.getMessages();
  }

  render() {
    if (this.state.messageSent === true) {
      return (
        <div>
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h1>Message Sent!</h1>
        </div>
      );
    }
    return (
      <div className="MessageBlock">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Messages</h1>
        <div className="message-field">
          <div className="messages">
            {this.state.messages.map((message) => (
              <div key={message.id} className="message">
                <h5>{message.username}</h5>
                {message.text} {message.likes}
              </div>
            ))}
          </div>
          <div className="NewMessage">
            <form
              value={this.state.message.text}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            >
              <input name="text" type="text" />
              <button>Create Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
