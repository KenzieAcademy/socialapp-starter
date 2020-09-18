import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList";
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
        messageSent: false,
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
    event.target.reset();
  };

  handleLike = (event) => {
    let userData = JSON.parse(localStorage.getItem("login")).result;
    let likeTarget = { messageId: Number(event.target.id) };
    let messagecheck = this.client.getSpecificMessage(Number(event.target.id));
    console.log(messagecheck);
    if (messagecheck.message === userData.username) {
      return console.log("You Already Liked This");
    }
    return this.client.likeMessage(likeTarget);
  };
  // componentDidUpdate() {
  //   if (this.state.messageSent === true) {
  //     this.getMessages();
  //     this.setState({
  //       messageSent: false,
  //     });
  //   }
  // }

  componentDidMount() {
    this.getMessages();
  }

  render() {
    if (this.state.messageSent === true) {
      this.getMessages();
      return (
        <div>
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
            <MessageList
              handleLike={this.handleLike}
              messageArray={this.state.messages}
            />
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
