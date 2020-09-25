import React from "react";
// import Image from "../../assets/images/ThumbsUp.png";
import Card from "react-bootstrap/Card";
import "../message/Message.css";
import SocialappService from "../../socialappService";
import MiniProfileIMG from "../../assets/images/marioParty.jpg";
import Image from "react-bootstrap/Image";
import { userIsAuthenticated } from "../../redux/HOCs";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.api = new SocialappService();
    this.state = {
      user: {},
      date: "",
      userPic: MiniProfileIMG,
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
      this.setState({ userPic: MiniProfileIMG });
    }
    return (
      <div className="Body">
        <Card style={{ width: "18rem" }}>
          <Card.Body className="Message">
            <Image rounded src={this.state.userPic} />
            <Card.Title> From: {this.state.user.displayName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Posted:{this.state.date}
            </Card.Subtitle>
            <Card.Text className="MessageText">{this.props.text}</Card.Text>
            <footer>
              {" "}
              {/* <Card.Link href="#">Reply</Card.Link>
            <Card.Link href="#">...</Card.Link> */}
              <div className="likes">Likes: {this.state.likes}</div>{" "}
              <div className="LikeButton">
                <button onClick={this.LikeFunction}>Like</button>{" "}
              </div>
            </footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default userIsAuthenticated(Message);
