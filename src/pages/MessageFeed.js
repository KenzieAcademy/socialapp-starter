import React from "react"
import Menu from "../components/menu/Menu"
import { userIsAuthenticated } from "../redux/HOCs"
import PostMessageService from "../services/PostMessagesService"


class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.PostMessageService = new PostMessageService()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleMessagePost = (event) => {
    event.preventDefault();
    this.PostMessageService.postMessage(this.state).then((result) => {
      console.log(result.data);
    });
    console.log("Post Button Pressed")
  };

  render() {
    return (
      <div className="Message">
        < Menu />
        <h3>MessageFeed</h3>
        <div className="postMessageForm">
          <form className="postMessageFormForm" onSubmit={this.handleMessagePost}>
            <input
              type="text"
              name="text"
              required
              onChange={this.handleChange}
            />
            <button type="submit">Post Message</button>
          </form>
        </div>
      </div>
    );
  }
}





export default userIsAuthenticated(MessageFeed);


