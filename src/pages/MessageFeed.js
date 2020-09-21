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

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.api = new SocialappService();
    this.popover = (
      <Popover id="newPost">
        {/* <Popover.Title as="h2">NEW POST</Popover.Title> */}
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
          <h1>MESSAGE LIST IS LOADING.....</h1>
        </div>
      );
    }
    return (
      <div className="MessageList">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>MESSAGE FEED</h1>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={this.popover}
        >
          <Button variant="dark" size="lg">
            MAKE A POST
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
    );
  }
}

export default userIsAuthenticated(MessageFeed);
