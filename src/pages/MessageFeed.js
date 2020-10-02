import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../services/DataService/DataService";
import Message from "../components/message/Message";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { text: "" },
      messages: [],
      limit: 10,
      FirstMessage: "",
      // messageSent: false,
    };

    this.client = new DataService();
  }

  getMessages() {
    return this.client.getMessages(this.state.limit).then((result) =>
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
    this.client.createMessage(this.state.message).then((result) => {
      this.getMessages();
    });

    this.setState({
      message: { text: "" },
      // messageSent: true,
    });
    event.target.reset();
  };

  componentDidMount() {
    this.getMessages();
    this.setState({
      limit: 20,
      userData: JSON.parse(localStorage.getItem("login")).result,
    });
  }

  loadMore = (event) => {
    this.setState((state) => ({
      FirstMessage: this.state.messages[0],
      limit: this.state.limit + 10,
    }));
    this.getMessages().then((result) => {
      if (this.state.FirstMessage.username === this.state.userData.username) {
      }
      if (this.state.FirstMessage.id !== this.state.messages[0].id) {
        return alert("New Messages!");
      }
    });
  };

  render() {
    return (
      <div className="MessageBlock">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <h1 className="messageHeader">Messages</h1>
        <div className="message-field">
          <div className="messages">
            {this.state.messages.map((messageObject) => (
              <Message key={messageObject.id} {...messageObject} />
            ))}
            <div className="endOfMessages">
              <h6>End of messages...</h6>
              <button className="loadMore" onClick={this.loadMore}>
                Load More Messages?
              </button>
            </div>
          </div>
          <div className="NewMessage">
            <form
              className="messageForm"
              value={this.state.message.text}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            >
              <h3>Write a message here!</h3>
              <textarea
                name="text"
                onChange={this.handleChange}
                autoComplete="off"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <button>Create Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
