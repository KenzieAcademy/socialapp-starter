import React from "react";
import DataService from "../../DataService";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.likes.length,
      likes: this.props.likes,
    };
    this.client = new DataService();
  }

  handleLike = () => {
    //I merged the two handleLike methods into one. The previous set up was keeping track of if liked with a boolean value in state. This caused issues with being unable to like/unlike once you navigated away or refreshed.
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    //this should return the index our like is located. Seems more performant than the previsous filter/map version.
    const likeIndex = this.state.likes.findIndex(
      (like) => like.username === username
    );

    if (this.state.likes.some((like) => like.username === username)) {
      this.client.deleteLike(this.state.likes[likeIndex].id).then((result) => {
        //Here in delete like we pass the likeIndex in the brackets and access the id of the like.
        console.log(result);
        this.setState((latestState) => ({
          likeCount: latestState.likeCount - 1,
          likes: [],
        }));
      });
    } else {
      this.client.postLikes(this.props.id).then((like) => {
        this.setState((latestState) => ({
          likeCount: latestState.likeCount + 1,
          likes: [...latestState.likes, like],
        }));
      });
    }
  };

  render() {
    //Here we're just using conditional rendering to make sure this delete message button appears on our messages.
    let deleteMessageButton = null;
    let userName = JSON.parse(localStorage.getItem("login")).result;
    if (this.props.username === userName.username) {
      deleteMessageButton = (
        <button onClick={() => this.props.handleDeleteMesssage(this.props.id)}>
          Delete Message
        </button>
      );
    }
    return (
      <li>
        {this.props.createdAt}, {this.props.username} posted: <br />
        {this.props.text}
        <div className="like-count">likes: {this.state.likeCount}</div>
        <button onClick={this.handleLike}>
          <span role="img" aria-label="fire">
            🦕
          </span>
        </button>
        {deleteMessageButton}
      </li>
    );
  }
}
//if we use emojis must be put in a span with role = img and aria-label
export default Message;
