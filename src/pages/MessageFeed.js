import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import SocialappService from "../socialappService";
import Message from "../components/message/Message";
import Post from "../components/post/Post";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger } from "react-bootstrap";
import "../pages/MessageFeed.css";
import MiniProfile from "../components/miniProfile/MiniProfile";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], text: "", currentUser: {} };
    this.api = new SocialappService();
    this.popover = (
      <Popover id="newPost">
        {/* <Popover.Title as="h2">NEW POST</Popover.Title> */}
        <Popover.Content>
          <Post post={this.handleNewPost} change={this.handleChange} />
        </Popover.Content>
      </Popover>
    );
  }

  componentDidMount() {
    this.retrieveMessages();
    this.api
      .getUser(localStorage.getItem("user"))
      .then((response) => this.setState({ currentUser: response.data.user }));
  }

  retrieveMessages() {
    this.api
      .getMessages()
      .then((response) =>
        this.setState({ messages: response.data.messages }, () =>
          console.log(response.data.messages)
        )
      );
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewPost = (e) => {
    e.preventDefault();
    this.api.postMessage({ text: this.state.text });
    setTimeout(() => {
      this.retrieveMessages();
      document.body.click();
    }, 500);
  };

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageList">
          <div className="MessageLoading">Message Feed Is Loading......</div>
        </div>
      );
    }
    return (
      <div className="Body">
        <MiniProfile user={this.state.currentUser} />
        <div className="MessageList">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <div className="MessageHeader">Message Feed</div>
          <br></br>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={this.popover}
            rootClose={true}
          >
            <Button className="PostButton" variant="dark" size="lg">
              POST A MESSAGE
            </Button>
          </OverlayTrigger>
          <div className="TheFeed">
            <ul>
              {this.state.messages.map((messageObject) => {
                return <Message {...messageObject} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
