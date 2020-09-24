import React from "react";
// import Image from "../../assets/images/ThumbsUp.png";
import Card from "react-bootstrap/Card";
import "../message/Message.css";

class Message extends React.Component {
  LikeFunction() {
    return <img src=""></img>; //Sometype of image thumbnail
  }
  render() {
    return (
      // <div className="Body">
      <div className="CardBody">
        <Card style={{ width: "600px" }}>
          <Card.Body className="Message">
            <Card.Title> From: {this.props.username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {new Date(this.props.createdAt).toDateString}
              Posted:{" "}
            </Card.Subtitle>

            <Card.Text className="MessageText">{this.props.text}</Card.Text>
            <footer>
              {" "}
              {/* <Card.Link href="#">REPLY</Card.Link> */}
              <div className="likes">Likes: {this.props.likes.length}</div>{" "}
              {/* <br></br> */}
              <button className="LikeButton" onClick={this.LikeFunction}>
                Like This Post
              </button>{" "}
            </footer>
          </Card.Body>
        </Card>
      </div>
      // </div>
    );
  }
}

export default Message;
