import React from "react";
import DataService from "../../DataService";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.likes.length,
      likes: this.props.likes,
      liked: false,
    };
  }

  handleLike = () => {
    const dataService = new DataService();
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    if (this.state.likes.some((like) => like.username === username)) return;

    dataService.postLikes(this.props.id).then((like) => {
      this.setState((latestState) => ({
        likeCount: latestState.likeCount + 1,
        likes: [...latestState.likes, like],
        liked: true,
      }));
    });
  };
  handleUnlike = () => {
    const dataService = new DataService();
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    const likeId = this.state.likes
      .filter((like) => like.username === username)
      .map((filterLike) => filterLike.id);
    console.log(likeId);
    if (this.state.likes.some((like) => like.username === username));

    dataService.deleteLike(likeId).then((like) => {
      console.log(like);
      this.setState((latestState) => ({
        likeCount: latestState.likeCount - 1,
        likes: [],
        liked: false,
      }));
    });
  };

  render() {
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
        <div>
          {this.state.liked ? (
            <button onClick={this.handleUnlike}>
              <span role="img" aria-label="fire">
                🦕
              </span>
            </button>
          ) : (
            <button onClick={this.handleLike}>
              <span role="img" aria-label="fire">
                🦕
              </span>
            </button>
          )}
          {deleteMessageButton}
        </div>
      </li>
    );
  }
}
//if we use emojis must be put in a span with role = img and aria-label
export default Message;
