import React from "react";
import NewMessage from "../components/NewMessage/NewMessage";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList"
import DataService from "../DataService"
import Menu from "../components/menu/Menu"

class MessagePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      offset: 100
    }
    this.client = new DataService()
  }

  
  getMessages() {
    this.client.getMessages().then(response => {
      this.setState({ messages: response.data.messages })
    })
  }
  
  componentDidMount() {
    setInterval(
      () => this.getMessages(),
      1000
    )
  }

    
  loadMoreMessages = () => {
    this.client.getMoreMessages(this.state.offset).then(response => {
      this.setState(currentState => {
        let newMessages = response.data.messages
        return { messages: [...currentState.messages, ...newMessages], offset: currentState.offset + 100 }
      })
    })
  }

  render() {
    return (
      <div className="MessagePage">
        <Menu className="message-page-menu" isAuthenticated={this.props.isAuthenticated} />
        <NewMessage className="new-message" isAuthenticated={this.props.isAuthenticated} />

        <MessageList className="message-list" messages={this.state.messages} loadMoreMessages={this.loadMoreMessages} />

        <h2>New Message</h2>

        <ul></ul>

      </div>
    )
  }
}

export default userIsAuthenticated(MessagePage)

