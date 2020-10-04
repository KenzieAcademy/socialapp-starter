import React from "react";
import Card from "react-bootstrap/Card";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.png";
import SocialappService from "../../socialappService";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.api = new SocialappService();

    this.state = {
      likes: this.props.likes.length,
      user: this.props.username,
      displayName: "loading",
      profilePic: ProfilePic,
    };
  }
  componentDidMount() {
    this.updateUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== this.props.username) {
      this.updateUser();
    }
  }

  updateUser() {
    this.api.getUser(this.props.username).then((response) =>
      this.setState({
        user: response.data.user.username,
        displayName: response.data.user.displayName,
        profilePic: response.data.user.pictureLocation,
      })
    );
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
    let picture = ProfilePic;
    if (this.state.profilePic !== null) {
      picture = `https://socialapp-api.herokuapp.com${this.state.profilePic}`;
    }

    return (
      <div className="MessageBody">
        <Card style={{ width: "620px" }}>
          <Card.Body>
            <img className="MessProfPic" src={ProfilePic} alt="Profile Pic" />
            <Card.Title className="MessMembHeader">
              {" "}
              Member: {this.props.username}
            </Card.Title>
            <Card.Subtitle className="MessSinceHeader">
              {" "}
              Member Since:
              {new Date(this.props.createdAt).toDateString}{" "}
            </Card.Subtitle>
            <Card.Text className="MessTextBox">{this.props.text}</Card.Text>
            <footer>
              {" "}
              <div className="ThumbsUp">
                Thumbs Ups: {this.props.likes.length}
              </div>{" "}
              <button
                className="ThumbsUpButton"
                onClick={this.LikeFunction}
                title="Give My Post A Thumbs Up!"
              >
                Thumbs Up!
              </button>{" "}
            </footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Message;
