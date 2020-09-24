import React from "react";
//import img from "../assets/images/likeThumbnail.jpg";
import Card from "react-bootstrap/Card";
import MiniProfile from "../miniProfile/MiniProfile";
class Message extends React.Component {
  LikeFunction() {
    return <img src=""></img>; //Sometype of image thumbnail
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <MiniProfile />
        <Card.Body className="Message">
          <Card.Title> From: {this.props.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {new Date(this.props.createdAt).toDateString}
            posted:{" "}
          </Card.Subtitle>
          <Card.Text className="MessageText">{this.props.text}</Card.Text>
          <footer>
            {" "}
            <Card.Link href="#">Reply</Card.Link>
            <Card.Link href="#">...</Card.Link>
            <div className="likes">Likes: {this.props.likes.length}</div>{" "}
            <button onClick={this.LikeFunction}>Like</button>{" "}
          </footer>
        </Card.Body>
      </Card>
    );
  }
}

export default Message;
