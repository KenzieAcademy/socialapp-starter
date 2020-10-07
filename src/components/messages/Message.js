import React from "react";
import MessageService from "./MessageService";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

class Message extends React.Component {
  state = { likeCount: this.props.likes.length };

  handleLike = () => {
    const messageService = new MessageService();
    const username = messageService.getUsername();
    if (this.props.likes.some((like) => like.username === username)) return;
    messageService
      .postLike(this.props.id)
      .then(
        this.setState((latestState) => ({
          likeCount: latestState.likeCount + 1,
        }))
      );
  };
  handleRemoveLike = () => {
      const messageService = new MessageService()
      messageService.removeLike(this.props.likes.id)
      .then (
        this.setState((latestState) => ({
            likeCount: latestState.likeCount - 1,
          }))
      )


  }
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <li className="messageList">
            at {new Date(this.props.createdAt).toDateString()}
            {this.props.username}
            <div className="textDiv">{this.props.text}</div>
            <div className="messageId">PostId: {this.props.id}</div>
            <div className="like-count">Likes: {this.state.likeCount}</div>
            <button onClick={this.handleLike}>
              <img
                className="image"
                src="https://opticalprism.ca/wp-content/uploads/2019/09/likes.png"
                alt="100"
                width="25px"
                height="25px"
              />
            </button>
            <Button onClick={this.handleRemoveLike} 
            variant="outlined"
            color="primary" 
            type="submit">Remove Like</Button>
          </li>
        </Container>
      </div>
    );
  }
}

export default Message;
