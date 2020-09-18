import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import SocialappService from "../socialappService";
import Message from "../components/message/Message";
import Post from "../components/post/Post";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger } from "react-bootstrap";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.api = new SocialappService();
    this.popover = (
      <Popover id="newPost">
        <Popover.Title as="h2">New Post</Popover.Title>
        <Popover.Content>
          <Post />
        </Popover.Content>
      </Popover>
    );
  }

  componentDidMount() {
    this.api
      .getMessages()
      .then((response) =>
        this.setState({ messages: response.data.messages }, () =>
          console.log(response.data.messages)
        )
      );
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageList">
          <h1>MessageList</h1>
          <h3>LOADING....</h3>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Message Feed</h1>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={this.popover}
        >
          <Button variant="primary">Make A New Post</Button>
        </OverlayTrigger>
        <ul>
          {this.state.messages.map((messageObject) => {
            return <Message {...messageObject} />;
          })}
        </ul>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
