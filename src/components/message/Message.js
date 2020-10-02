import React from "react";
import Card from "react-bootstrap/Card";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";
import SocialappService from "../../socialappService";

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
      .then(this.setState({ likes: this.state.likes + 1 }));
  };

  render() {
    let picture = ProfilePic;
    if (this.state.user.pictureLocation !== null) {
      picture = `https://socialapp-api.herokuapp.com${this.state.user.pictureLocation}`;
    }

    return (
      <div className="MessageBody">
        <div className="MessageCardBody">
          <Card className="MessageCard" style={{ width: "620px" }}>
            <Card.Body className="Message">
              <img className="ProfilePic" src={ProfilePic} alt="Profile Pic" />
              <div className="MessageMemberTitle">
                <Card.Title> Member: {this.props.username}</Card.Title>
              </div>
              {/* <div className="PostInfo"> */}
              <Card.Subtitle className="mb-2 text-muted">
                {new Date(this.props.createdAt).toDateString}{" "}
              </Card.Subtitle>
              {/* </div> */}
              <Card.Text className="MessageTextBox">
                {this.props.text}
              </Card.Text>
              <footer>
                {" "}
                <div className="ThumbsUpNumber">
                  <div className="ThumbsUp">
                    Thumbs Up: {this.props.likes.length}
                  </div>{" "}
                </div>
                <button className="ThumbsUpButton" onClick={this.LikeFunction}>
                  Thumbs Up!
                </button>{" "}
              </footer>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Message;
