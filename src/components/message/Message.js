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
        <div className="MessageCardBody">
          <Card
            className="MessageCard"
            style={{ width: "613px", height: "240px" }}
          >
            <Card.Body className="Message">
              <div className="MessProfPicBox">
                <img
                  className="MessProfilePic"
                  src={ProfilePic}
                  alt="Profile Pic"
                />
              </div>
              <div className="MessageMemberTitle">
                <Card.Title> Member: {this.props.username}</Card.Title>
              </div>
              <Card.Subtitle className="mb-2 text-muted">
                {new Date(this.props.createdAt).toDateString}{" "}
              </Card.Subtitle>
              <Card.Text className="MessageTextBox">
                {this.props.text}
              </Card.Text>
              {/* <footer> */}{" "}
              <div className="MessThumbsUpNumberBox">
                <div className="MessThumbsUpNumber">
                  Thumbs Up: {this.props.likes.length}
                </div>{" "}
              </div>
              <div className="MessThumbsUpButtonBox">
                <button
                  className="MessThumbsUpButton"
                  onClick={this.LikeFunction}
                >
                  Thumbs Up!
                </button>{" "}
              </div>
              {/* </footer> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Message;
