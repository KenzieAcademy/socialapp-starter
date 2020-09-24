import React from "react";
import Menu from "../components/menu/Menu"
import Service from "../services/Service"
import Message from "../components/message/Message"
import PostMessage from "../components/postMessage/PostMessage"
import { userIsAuthenticated } from "../redux/HOCs"


class MessageFeed extends React.Component {

  client = new Service();

  state = {
    message: [],

  };



  componentDidMount() {
    this.client.getAllMessages().then(response => {
      this.setState({ message: response.data.message })
    })
  }

  render() {
    if (this.state.message.length === 0) {
      return (
        <div className="MessageList">
          <Menu />
          <h1>MessageList</h1>
          <h3>LOADING...</h3>
        </div>
      )
    }

    return (
      <div className="MessageList">
        <Menu />
        <h1>Message Feed</h1>
        <PostMessage />
        <ul>
          {this.state.message.map(messageObject => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
        </ul>
      </div>
    );
  }
}


export default userIsAuthenticated(MessageFeed);


