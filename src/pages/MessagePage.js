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
      message: "",
      offset: 100
    }
    this.client = new DataService()
  }

  handleMessage = e => {
    e.preventDefault();
    if (this.state.message.length < 256) {
      this.client.postMessages({ text: this.state.message }).then(response => {
        this.setState(currentState => ({
          messages: [response.data.message, ...currentState.messages]
        }))
      })
      this.setState({
        message: "",
      })
    } else {
      alert("Your message is too long, please limit to 255 characters.")
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.client.getMessages().then(response => {
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

  handleDelete = messageId => e => {
    e.preventDefault();
    this.client.deleteMessage(messageId).then(result => {
      if (result.data.statusCode === 200) {
        this.setState(currentState => {
          const index = currentState.messages.findIndex(message => message.id === result.data.id)
          const messages = [...currentState.messages]
          messages.splice(index, 1)
          return { messages }
        })

        alert("You have successfully deleted your message")
      }
    })
  }

  render() {
    return (
      <div className="MessagePage">
        <Menu className="message-page-menu" isAuthenticated={this.props.isAuthenticated} />
        <NewMessage
          handleMessage={this.handleMessage}
          handleChange={this.handleChange}
          message={this.state.message}
          className="new-message"
          isAuthenticated={this.props.isAuthenticated}
        />

        <MessageList className="message-list" handleDelete={this.handleDelete} messages={this.state.messages} loadMoreMessages={this.loadMoreMessages} />



        <ul></ul>

      </div>
    )
  }
}

export default userIsAuthenticated(MessagePage)

