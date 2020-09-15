import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../services/DataService/DataService";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { text: "" },
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

  handleChange = (e) => {
    let newmessage = e.target.value;
    this.setState({ message: { text: newmessage } });
  };
  // reused from login form

  handleSubmit = (event) => {
    event.preventDefault();
    this.client.createMessage(this.state.message);
    return this.getMessages();
  };

  componentDidMount() {
    this.getMessages();
  }

  render() {
    return (
      <div className="MessageBlock">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Messages</h1>
        <div className="messages">
          {this.state.messages.map((message) => (
            <div className="message">
              <h5>{message.username}</h5>
              {message.text} {message.likes}
            </div>
          ))}
        </div>
        <div className="NewMessage">
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <input name="text" type="text" />
            <button>Create Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
