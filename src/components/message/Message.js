import React from "react";
import { Button } from "react-bootstrap"
import LikeService from "../../services/LikeService";
import DeleteMessageService from "../../services/DeleteMessageService";

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

  handleError = (event) => {
    event.target.src =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-ZzOpik5sFZg%2FUleI27zMJyI%2FAAAAAAAAHgs%2FnQEZnjiSn9M%2Fs1600%2Fprofileicon.jpg&f=1&nofb=1";
  };
  render() {
    let deleteButton;
    if (this.props.username === this.client.getUserName()) {
      deleteButton = <Button onClick={this.handleDelete}>delete</Button>;
    }
    return (
      // <div className="card" >
      //   <Card bg="secondary" style={{ width: "30rem" }}>
      //     <Card.Body>
      //       <Card.Header> {this.props.username} </Card.Header>
      //       <Card.Title> {this.props.text} </Card.Title>
      //       <Card.Text>
      //         At {new Date(this.props.createdAt).toDateString()}
      //       </Card.Text>
      //       <Card.Text>Likes: {this.props.likes.length} </Card.Text>
      //       <Button className="like-button" variant="primary">
      //         Like
      //       </Button>
      //       {deleteButton}
      //     </Card.Body>
      //   </Card>
      // </div>
      <li className="Message">
        <img
          width={100}
          height={100}
          src={
            "https://socialapp-api.herokuapp.com/users/" +
            this.props.username +
            "/picture"
          }
          alt="Profile"
          onError={this.handleError}
        />
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
