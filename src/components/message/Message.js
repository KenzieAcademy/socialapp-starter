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
      userPic: ProfilePic,
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
      .then(this.setState({ likes: this.state.likes++ }));
  };

  render() {
    if (this.state.userPic === "User does not have a picture") {
      this.setState({ userPic: ProfilePic });
    }
    return (
      <div className="CardBody">
        <Card style={{ width: "575px" }}>
          <Card.Body className="Message">
            <Image
              className="ProfilePic"
              src={this.state.userPic}
              alt="Profile Pic"
            />
            <div className="ProfileLink">
              <Link to="/miniProfile">Check Out My Profile</Link>
            </div>
            <div className="MemberTitle">
              <Card.Title> Member: {this.state.user.displayName}</Card.Title>
            </div>
            <div className="PostedTitle">
              <Card.Subtitle className="mb-2 text-muted">
                this.state.date
              </Card.Subtitle>
            </div>
            <Card.Text className="MessageText">{this.props.text}</Card.Text>
            <Card.Footer>
              <div className="likes">Likes: {this.state.likes}</div>
              <div className="LikeButton">
                <button onClick={this.LikeFunction}>Like</button>
              </div>
              <button className="LikeButton" onClick={this.LikeFunction}>
                LIKE MY POST!
              </button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default userIsAuthenticated(Message);
