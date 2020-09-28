import React from "react";
import NewMessage from "../components/NewMessage/NewMessage";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "../components/messageList/MessageList"
import DataService from "../DataService"
import { loginData } from "../DataService"
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
  handleLike = () => {
    //to current state on number of likes
    state = { likeCount: this.props.likes.length }

    //const dataService = new DataService()
    const loginData = JSON.parse(localStorage.getItem('login')).result

    //get logged in user name
    const loggedinUsername = loginData.username
    console.log(this.handleLike)

    //get the current username who is liking the message
    const likeUsername = this.props.likes.map(likeObject => likeObject.username)

    //get the username who wrote the message
    const messageUsername = this.props.username

    //check if current user already liked message
    if (this.props.likes.some(likeObject => likeObject.username === loggedin.Object.username))

      return {}
    dataService.postLike(this.props.id).then(like => console.log(like))
    //increments counter for number of likes
    this.setState(latestState => ({ likeCount: latestState.likeCount + 1 }))

  }

  render() {
    return (
      <div className="MessagePage">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <NewMessage isAuthenticated={this.props.isAuthenticated} />
        <h2>New Message</h2>
        <MessageList messages={this.state.messages} />
        < button onClick={this.handleLike} > <span role="img" aria-label=" Like">👍
      </span > </button >
      </div>
    )
  }
}

export default { userIsAuthenticated(MessagePage) }
