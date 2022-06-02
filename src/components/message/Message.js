import React from "react";
import Card from "react-bootstrap/Card";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.png";
import SocialappService from "../../socialappService";

const styles = {
  paperContainer: {
    maxwidth: 125,
    maxheight: 125,
    backgroundImage: `url(${"static/src/img/main.jpg"})`,
  },
};

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
    this.api
      .addLike(messageID)
      .then(this.setState({ likes: this.state.likes + 1 }));
  };

  render() {
    let picture = ProfilePic;
    if (this.state.profilePic !== null) {
      picture = `https://socialapp-api.herokuapp.com${this.state.profilePic}`;
    }

    let date = new Date(this.props.createdAt);
    date = date.toUTCString();

    return (
      <div className="MessageBody">
        <div className="MessageCardBody">
          <Card
            className="MessageCard"
            style={{ width: "613px", height: "220px" }}
          >
            <Card.Body className="Message">
              <div className="MessProfPicBox">
                <img
                  className="MessProfilePic"
                  src={picture}
                  alt="Profile Pic"
                  style={styles.paperContainer}
                />
              </div>
              <div className="PosterInfoBox">
                <Card.Title className="MessMemberTitle">
                  Posted By: {this.props.username}
                </Card.Title>
                <Card.Subtitle className="TimeStamp">
                  Member Since: {date}
                </Card.Subtitle>
              </div>
              <Card.Text className="MessageTextBox">
                {this.props.text}
              </Card.Text>
              <div className="MessThumbsUpNumberBox">
                <div className="MessThumbsUpNumber">
                  Thumbs Up: {this.state.likes}
                </div>
              </div>
              <div className="MessThumbsUpButtonBox">
                <button
                  className="MessThumbsUpButton"
                  onClick={this.LikeFunction}
                >
                  Thumbs Up!
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Message;
