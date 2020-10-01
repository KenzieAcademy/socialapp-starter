import React from "react";
import NewMessage from "../components/NewMessage/NewMessage";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList"
import DataService from "../DataService"
import Menu from "../components/menu/Menu"
import InfiniteScroll from 'react-infinite-scroller';

class MessagePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      offset: 100
    }
    this.client = new DataService()
  }

  componentDidMount() {
    this.client.getMessages().then(response => {
      console.log(response.data.messages)
      this.setState({ messages: response.data.messages })
    })
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
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <NewMessage isAuthenticated={this.props.isAuthenticated} />

        <MessageList messages={this.state.messages} loadMoreMessages={this.loadMoreMessages} />

        <h2>New Message</h2>

        <ul></ul>

      </div>
    )
  }
}

export default userIsAuthenticated(MessagePage)

