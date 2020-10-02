import React from "react";
import Card from "react-bootstrap/Card";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";
import Image from "react-bootstrap/Image";
import { userIsAuthenticated } from "../../redux/HOCs";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes.length,
    };
  }

  LikeFunction = () => {
    let messageID = { messageId: this.props.id };
    this.props.api
      .addLike(messageID)
      .then(this.setState({ likes: this.state.likes + 1 }));
  };

  render() {
    let postedAt = new Date(this.props.createdAt);
    postedAt = postedAt.toUTCString();
    let user = {};
    this.props.api
      .getUser(this.props.username)
      .then((response) => (user = response.data.user));
    let picture = ProfilePic;
    if (user.pictureLocation !== undefined && user.pictureLocation !== null) {
      picture = `https://socialapp-api.herokuapp.com${user.pictureLocation}`;
    }

    return (
      <div className="CardBody">
        <Card style={{ width: "575px" }}>
          <Card.Body className="Message">
            <Image
              className="ProfilePic"
              src={picture}
              alt="Profile Pic"
              name={this.props.username}
              onClick={this.props.selectUserToDisplay}
            />
            <div className="MemberTitle">
              <Card.Title> Member: {user.displayName}</Card.Title>
            </div>
            <div className="PostedTitle">
              <Card.Subtitle className="mb-2 text-muted">
                {postedAt}
              </Card.Subtitle>
            </div>
            <Card.Text className="MessageText">{this.props.text}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Text className="likes">Likes: {this.state.likes}</Card.Text>
            <button className="LikeButton" onClick={this.LikeFunction}>
              LIKE MY POST!
            </button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default userIsAuthenticated(Message);
