import React from "react";
import NewMessage from "../components/NewMessage/NewMessage";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList"
import DataService from "../DataService"

class MessagePage extends React.Component {
  constructor(props) {
    super(props)
    this.client = new DataService()
    this.state = { messages: [] }
  }
  componentDidMount() {
    this.client.getMessages().then(response => {
      console.log(response.data.messages)
      this.setState({ messages: response.data.messages })
    })
  }

  render() {
    return (
      <div className="MessagePage">
        <NewMessage isAuthenticated={this.props.isAuthenticated} />
<<<<<<< HEAD
=======
        <h2>New Message</h2>
        <MessageList messages={this.state.messages} />
>>>>>>> 29bdc8c7c6bad2da17e66b1acf03b0f10b432818
      </div>
    );
  }
}

export default userIsAuthenticated(MessagePage);
