import React from "react";
import LikeService from "../../services/LikeService";
// import userIsAuthenticated from "../../redux/HOCs"
class Message extends React.Component {
  likeHandler = (e) => {
    new LikeService().createLike(this.props.id).then((response) => {
      console.log(response);
    });
    console.log("like");
  };

  render() {
    return (
      <li className="Message">
        At {new Date(this.props.createdAt).toDateString()},{this.props.username}{" "}
        posted:
        <div className="message-text">{this.props.text}</div>
        <button className="likes" onClick={this.likeHandler}>
          Likes: {this.props.likes.length}
        </button>
      </li>
    );
  }
}

export default Message;
