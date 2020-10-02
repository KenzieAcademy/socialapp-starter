import React from "react";
import LikeService from "../../services/LikeService";
import DeleteMessageService from "../../services/DeleteMessageService";
// import userIsAuthenticated from "../../redux/HOCs"
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DeleteMessageService();
  }
  likeHandler = (e) => {
    new LikeService().createLike(this.props.id).then((response) => {
      console.log(response);
    });
    console.log("like");
  };

  handleDelete = (e) => {
    this.client.createDelete(this.props.id).then((response) => {
      console.log(response);
    });
  };

  render() {
    let deleteButton;
    if (this.props.username === this.client.getUserName()) {
      deleteButton = <button onClick={this.handleDelete}>delete</button>;
    }
    return (
      <li className="Message">
        At {new Date(this.props.createdAt).toDateString()},{this.props.username}{" "}
        posted:
        <div className="message-text">{this.props.text}</div>
        <button className="likes" onClick={this.likeHandler}>
          Likes: {this.props.likes.length}
        </button>
        {deleteButton}
      </li>
    );
  }
}

export default Message;
