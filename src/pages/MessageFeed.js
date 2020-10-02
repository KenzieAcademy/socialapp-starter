import React from "react";
import BackEndServices from "../BackEndServices";
import DeleteMessage from "../components/messages/DeleteMessage";
import Message from "../components/messages/Message";
import PostMessage from "../components/messages/PostMessage";
import GetMessage from "../components/messages/GetMessage"
import UserList from "../components/users/UserList"
import { userIsAuthenticated } from "../redux/HOCs";

class MessageFeed extends React.Component {
  state = { messages: [] };

  componentDidMount() {
    BackEndServices.getMessages().then((response) => {
      this.setState({ messages: response.data.messages })
    });
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="messageFeed">
          <h3>LOADING....</h3>
        </div>
      );
    }

    return (
      <div className="messageFeed">
        <h1>Our MessageFeed goes on this page</h1>
        <PostMessage login={this.props.login} isAuthenticated={this.props.isAuthenticated} />
        <GetMessage />
        <DeleteMessage />
        <ul>
       {this.state.messages.map(
         messageObject => (
           <Message key={messageObject.id} {...messageObject} />
         )
       )}
        </ul>
          <UserList />
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
