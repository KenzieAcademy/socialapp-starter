import React from "react";
import DataService from "../../DataService";

class Message extends React.Component {
  state = {
    likeCount: this.props.likes.length,
    likes: this.props.likes,
  };
  handleLike = () => {
    const dataService = new DataService();
    // if (this.state.likes.same(like => like.username ===))
    dataService.postLikes(this.props.id).then((like) => {
      console.log({ like });
      this.setState((latestState) => ({
        likeCount: latestState.likeCount + 1,
        likes: [...latestState.likes, like],
      }));
    });
  };
  render() {
    return (
      <li>
        {this.props.createdAt}, {this.props.username} posted: <br />
        {this.props.text}
        <div className="like-count">likes: {this.state.likeCount}</div>
        <button onClick={this.handleLike}>
          <span role="img" aria-label="fire">
            🔥
          </span>
        </button>
      </li>
    );
  }
}
//if we use emojis must be put in a span with role = img and aria-label
export default Message;
