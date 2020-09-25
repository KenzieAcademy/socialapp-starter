import React from "react";
// import Image from "../../assets/images/Placeholder_Image.gif";
// import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";

class Message extends React.Component {
  LikeFunction() {
    return <img src=""></img>; //Sometype of image thumbnail
  }
  render() {
    return (
      <div className="CardBody">
        <Card style={{ width: "600px" }}>
          <Card.Body className="Message">
            <img
              className="ProfilePic"
              src={ProfilePic}
              alt="Profile Pic"
              // class="img-thumbnail"
            />
            <div className="ProfileLink">
              <Link to="/miniProfile">Check Out My Profile</Link>
            </div>
            <Card.Title> From: {this.props.username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {new Date(this.props.createdAt).toDateString}
              posted:{" "}
            </Card.Subtitle>
            <Card.Text className="MessageText">{this.props.text}</Card.Text>
            <footer>
              {" "}
              <div className="likes">Likes: {this.props.likes.length}</div>{" "}
              <button className="LikeButton" onClick={this.LikeFunction}>
                Like
              </button>{" "}
              {/* <div className="LikeButton">
                <input type="submit" value="" onClick={this.LikeFunction} />{" "}
              </div> */}
            </footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Message;
