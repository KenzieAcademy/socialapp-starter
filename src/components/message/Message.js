import React from "react";
import DataService from "../../dataService";

class Message extends React.Component {
  state = { likeCount: this.props.likes.length };

  handleLike = () => {
    const client = new DataService();
    const username = client.getUsername();
    if (this.props.likes.some((like) => like.username === username)) return;
    client.postLike(this.props.id).then((like) => {
      console.log("liked");
      this.setState((newState) => ({ likeCount: newState.likeCount + 1 }));
    });
  };

  render() {
    return (
      <li className="Message">
        At {this.props.createdAt},{this.props.username} posted:
        <br />
        {this.props.text}
        <div className="like-counter">Likes {this.props.likes.length}</div>
        {/* <form> */}
        <button onClick={this.handleLike}>Button</button>
        {/* </form> */}
      </li>
    );
  }
}
export default Message;
