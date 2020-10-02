import React from "react";
import Menu from "../components/menu/Menu";
import api from "../services/BackendService";
import Message from "../components/message/Message";
import PostMessage from "../components/PostMessage";
import GetUsersService from "../services/GetUsersService";
import "./MessageList.css";

class MessageList extends React.Component {
  state = { messages: [], users: [] };

  componentDidMount() {
    api.getAllMessages().then((response) => {
      this.setState({ messages: response.data.messages });
    });
    new GetUsersService().getUsers().then((response) => {
      this.setState({ users: response.data.users });
      console.log(response.data);
    });
  }

  render() {
    if (this.state.messages.length === 0 || this.state.users.length === 0) {
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
        <PostMessage />
        <div className="messageContainer">
          <ul className="messageList">
            {this.state.messages.map((messageObject) => (
              <Message key={messageObject.id} {...messageObject} />
            ))}
          </ul>
          <ul className="usersList">
            <h1>Follow These Users</h1>
            {this.state.users.map((userObject) => (
              <li>{userObject.username}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MessageList;
