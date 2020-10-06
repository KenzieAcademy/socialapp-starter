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
    this.state = {
      messages: [],
      text: "",
      currentUser: {},
      selectedUser: "",
      delay: 20000,
    };
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
    this.interval = setInterval(this.tick, this.state.delay);
  }

  tick = () => {
    this.retrieveMessages();
    console.log("check for new messages");
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  retrieveMessages() {
    this.api
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  handleSelectUser = (e) => {
    this.api
      .getUser(e.target.name)
      .then((response) => this.setState({ selectedUser: response.data.user }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewPost = (e) => {
    e.preventDefault();
    this.api.postMessage({ text: this.state.text });
    setTimeout(() => {
      this.retrieveMessages();
      document.body.click();
    }, 750);
  };

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageLoading">
          <div className="MessageLoading">Message Feed Is Loading......</div>
        </div>
      );
    }
    let popupProfile = <div></div>;
    if (this.state.selectedUser !== "") {
      popupProfile = <MiniProfile user={this.state.selectedUser} />;
    }
    return (
      <div className="MessageFeedPageBody">
        <div className="MessageMenuBox">
          <div className="MessageMenuText">
            <Menu isAuthenticated={this.props.isAuthenticated} />
          </div>
        </div>
        <div className="MessageHeaderBox">
          <div className="MessageFeedHeaderText">Message Feed</div>
        </div>
        <div className="FeedBody">
          <div className="PostFeedBody">
            <ul>
              {this.state.messages.map((messageObject) => {
                return <Message {...messageObject} />;
              })}
            </ul>
          </div>
        </div>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={this.popover}
          rootClose={true}
        >
          <div className="MiniProfileBox-PostButtonBox">
            <div className="MiniProfileBox">
              <MiniProfile user={this.state.currentUser} />
              <div className="PostButtonBox">
                <Button
                  className="PostButton"
                  variant="dark"
                  size="lg"
                  title="Post A Message"
                ></Button>
              </div>
            </div>
          </div>
        </OverlayTrigger>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
