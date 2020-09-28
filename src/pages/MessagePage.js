import React from "react";
import NewMessage from "../components/NewMessage/NewMessage";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList"
import DataService from "../DataService"
import Menu from "../components/menu/Menu"

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
        <Menu />
        <NewMessage isAuthenticated={this.props.isAuthenticated} />
        <h2>New Message</h2>
        <ul></ul>

        <MessageList messages={this.state.messages} />

      </div>
    );
  }
}





export default userIsAuthenticated(MessagePage);
