import React from "react";
// import Image from "../../assets/images/Placeholder_Image.gif";
// import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";
import SocialappService from "../../socialappService";
import Image from "react-bootstrap/Image";
import { userIsAuthenticated } from "../../redux/HOCs";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.api = new SocialappService();

    this.state = {
      user: {},
      date: "",
      likes: this.props.likes.length,
    };
  }

  componentDidMount() {
    this.api
      .getUser(this.props.username)
      .then((response) => this.setState({ user: response.data.user }));
    const postedAt = new Date(this.props.createdAt);
    this.setState({ date: postedAt.toUTCString() });
    // this.api
    //   .getProfilePic(this.props.username)
    //   .then((response) => this.setState({ userPic: response.data.message }));
  }

  LikeFunction = () => {
    let messageID = { messageId: this.props.id };
    this.api
      .addLike(messageID)
      .then(this.setState({ likes: this.state.likes + 1 }));
  };

  render() {
    let picture = ProfilePic;
    if (this.state.user.pictureLocation !== null) {
      picture = `https://socialapp-api.herokuapp.com${this.state.user.pictureLocation}`;
    }

    return (
      <div className="CardBody">
        <Card style={{ width: "575px" }}>
          <Card.Body className="Message">
            <Image className="ProfilePic" src={picture} alt="Profile Pic" />
            <div className="MemberTitle">
              <Card.Title> Member: {this.state.user.displayName}</Card.Title>
            </div>
            <div className="PostedTitle">
              <Card.Subtitle className="mb-2 text-muted">
                {this.state.date}
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
