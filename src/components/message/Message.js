import React from "react";
import SocialAppService from "../../socialAppService";

class Message extends React.Component {
  state = { likeCount: this.props.likes.length };
  client = new SocialAppService();

  handleLike = () => {
    const loggedInUsername = this.client.getUsername();
    const userHasLiked = this.props.likes.some(
      (likeObject) => likeObject.username === loggedInUsername
    );
    if (userHasLiked) return;

    this.client.postLike(this.props.id).then((like) => {
      this.setState((latestState) => ({
        likeCount: latestState.likeCount + 1,
      }));
    });
  };

  //     Search the list of likes in state for a like object with a matching username: you can reuse the callback you're passing to .some() and instead pass it to .find()
  // Find() will return the like object you want to delete, so assign that to a variable, like doomedLike. Then pass doomedLike.id to this.client.deleteLike.

  handleDeleteLike = () => {
    const loggedInUsername = this.client.getUsername();
    // const userHasLiked = this.props.likes.find(
    //     (likeObject) => likeObject.username === loggedInUsername
    // )
    const doomedLike = this.props.likes.find(
      (likeObject) => likeObject.username === loggedInUsername
    );
    if (doomedLike) return;

    this.client.deleteLike(this.props.id).then((response) => {
      if (response.data.statusCode !== 200) return;

      this.setState((latestState) => ({
        likeCount: latestState.likeCount - 1,
      }));
    });
  };

  render() {
    return (
      <li className="message">
        At {this.props.createdAt},{this.props.username}
        posted
        <div>
          {this.props.text}

          <div className="like-count">Likes: {this.state.likeCount}</div>
          <button onClick={this.handleLike}>
            <span role="img" aria-label="like">
              👍
            </span>
          </button>
          {/* <br /> */}
          <button onClick={this.handleDeleteLike}>
            <span role="img" aria-label="like">
              👎{" "}
            </span>
          </button>
        </div>
      </li>
    );
  }
}

export default Message;
