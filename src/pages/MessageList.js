import React from "react";
import Menu from "../components/menu/Menu";
import API from "../services/BackendService";
import Message from "../components/message/Message";
import PostMessage from "../components/postMessage/PostMessage";
import GetUsersService from "../services/GetUsersService";
import Service from "../services/DataService"
import {userIsAuthenticated} from "../redux/HOCs"
import "./MessageList.css";

class MessageList extends React.Component {
    client = new Service()

    state = { message: [], users: [], text: "" };

  componentDidMount() {
    API.getAllMessages().then((response) => {
      this.setState({ message: response.data.messages });
      console.log(response.data)
    });
    new GetUsersService().getUsers().then((response) => {
      this.setState({ users: response.data.users });
      console.log(response.data);
    });
  }
  handleMessagePost = (event) => {
    event.preventDefault();
    this.client.postMessage({ text: this.state.text }).then((result) => {
      this.setState((currentState) => {
        return {
          message: [result.data.message, ...currentState.message],
          text: "",
        };
      });
    });
    console.log("Post Button Pressed");
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    if (this.state.message.length === 0 || this.state.users.length === 0) {
      return (
        <div className="MessageList">
          <Menu />
          <h3>LOADING...</h3>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <Menu isAuthenticated = {this.props.isAuthenticated} />
        
        <PostMessage
          handleChange={this.handleChange}
          handleMessagePost={this.handleMessagePost}
          text={this.state.text}
        />
        <div className="messageContainer">
          <ul className="messageList">
            {this.state.message.map((messageObject) => (
              <Message key={messageObject.id} {...messageObject} />
            ))}
          </ul>
          <ul className="usersList">
            <h1 className = "kwitter" >Other Users</h1>
            {this.state.users.map((userObject) => (
              <li>{userObject.username}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default userIsAuthenticated(MessageList);